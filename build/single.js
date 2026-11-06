// build/single.js — 构建单文件 HTML，并连同外部资源输出到 dist-single/
import { execSync } from 'child_process'
import { copyFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'fs'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const root = resolve(__dirname, '..')

const distSingle = join(root, 'dist-single')
const tempDir = join(root, 'dist-single-temp')

// `--skip-dist` 只产出 dist-single/，跳过末尾重建 dist/ 的步骤（CI 部署 Pages 时用得上）
const skipDist = process.argv.includes('--skip-dist')

// 1. 用 singleFile 模式构建到临时目录
console.log('🔨 Building single-file HTML to temp...')
execSync(`npx vite build --mode single --outDir "${tempDir}"`, { stdio: 'inherit', cwd: root })

// 2. 创建 dist-single 输出目录
if (existsSync(distSingle)) rmSync(distSingle, { recursive: true })
mkdirSync(distSingle, { recursive: true })

// 3. 复制 index.html
copyFileSync(join(tempDir, 'index.html'), join(distSingle, 'index.html'))
console.log('📄 Copied index.html to dist-single/')

// 4. 复制静态资源到 dist-single/
//    来源必须是 tempDir（Vite 构建时已把 public/ 拷入其中），不能用 dist/：
//    dist/ 在全新环境（CI）里不存在，existsSync 会静默跳过，导致产物丢失全部图标与字体。
const assetDirs = ['EgoGiftIcon', 'Buf', 'card_pack', 'fonts']
const favicon = join(tempDir, 'favicon.ico')
// 根级图标（public/icon.png），index.html 用作 favicon
const rootIcons = ['icon.png']
let copiedCount = 0

for (const dirName of assetDirs) {
  const srcDir = join(tempDir, dirName)
  const destDir = join(distSingle, dirName)
  if (!existsSync(srcDir)) {
    console.warn(`⚠️  Skipped ${dirName}/ (not found in build output)`)
    continue
  }
  mkdirSync(destDir, { recursive: true })
  const files = readdirSync(srcDir, { recursive: true })
  for (const file of files) {
    if (file && !file.endsWith('/')) {
      copyFileSync(join(srcDir, file), join(destDir, file))
    }
  }
  console.log(`📁 Copied ${dirName}/ (${files.filter(f => f && !f.endsWith('/')).length} files)`)
  copiedCount += files.filter(f => f && !f.endsWith('/')).length
}

for (const iconName of rootIcons) {
  const src = join(tempDir, iconName)
  if (existsSync(src)) {
    copyFileSync(src, join(distSingle, iconName))
    copiedCount += 1
  }
}

if (existsSync(favicon)) {
  copyFileSync(favicon, join(distSingle, 'favicon.ico'))
  copiedCount += 1
}

// 5. 清理临时目录
rmSync(tempDir, { recursive: true })

// 6. 重建正常 dist/（确保 Electron 构建不受影响）
if (!skipDist) {
  console.log('🔨 Rebuilding normal dist/ for Electron...')
  execSync('npm run build', { stdio: 'inherit', cwd: root })
}

console.log(`\n✅ Single-file HTML ready: dist-single/index.html`)
console.log(`   JS/CSS inlined + ${copiedCount} external asset files copied`)
console.log(`   Double-click dist-single/index.html to view in browser`)
if (!skipDist) {
  console.log(`\n   Electron dist/ rebuilt successfully.`)
}
