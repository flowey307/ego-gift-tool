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
const distDir = join(root, 'dist')
const tempDir = join(root, 'dist-single-temp')

// 1. 用 singleFile 模式构建到临时目录
console.log('🔨 Building single-file HTML to temp...')
execSync(`npx vite build --mode single --outDir "${tempDir}"`, { stdio: 'inherit', cwd: root })

// 2. 创建 dist-single 输出目录
if (existsSync(distSingle)) rmSync(distSingle, { recursive: true })
mkdirSync(distSingle, { recursive: true })

// 3. 复制 index.html
copyFileSync(join(tempDir, 'index.html'), join(distSingle, 'index.html'))
console.log('📄 Copied index.html to dist-single/')

// 4. 复制 dist/ 中必要的静态资源到 dist-single/
const assetDirs = ['EgoGiftIcon', 'Buf', 'card_pack', 'fonts']
const favicon = join(distDir, 'favicon.ico')
let copiedCount = 0

for (const dirName of assetDirs) {
  const srcDir = join(distDir, dirName)
  const destDir = join(distSingle, dirName)
  if (existsSync(srcDir)) {
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
}

if (existsSync(favicon)) {
  copyFileSync(favicon, join(distSingle, 'favicon.ico'))
  copiedCount += 1
}

// 5. 清理临时目录
rmSync(tempDir, { recursive: true })

// 6. 重建正常 dist/（确保 Electron 构建不受影响）
console.log('🔨 Rebuilding normal dist/ for Electron...')
execSync('npm run build', { stdio: 'inherit', cwd: root })

console.log(`\n✅ Single-file HTML ready: dist-single/index.html`)
console.log(`   JS/CSS inlined + ${copiedCount} external asset files copied`)
console.log(`   Double-click dist-single/index.html to view in browser`)
console.log(`\n   Electron dist/ rebuilt successfully.`)
