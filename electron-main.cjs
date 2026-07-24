// electron-main.cjs
const { app, BrowserWindow } = require('electron')
const http = require('http')
const path = require('path')
const fs = require('fs')

let _mainWindow = null
let server = null
const PORT = 9876

function createWindow() {
  console.log('[main] __dirname:', __dirname)

  // 尝试多种可能的位置
  const possiblePaths = [
    path.join(__dirname, 'dist'),
    path.join(__dirname, '..', 'dist'),
    path.join(__dirname, '..', 'resources', 'app', 'dist'),
  ]

  let distDir = null
  for (const p of possiblePaths) {
    console.log('[main] Checking:', p)
    if (fs.existsSync(path.join(p, 'index.html'))) {
      distDir = p
      break
    }
  }

  if (!distDir) {
    console.error('[main] ERROR: Could not find dist/ directory!')
    // 列出 __dirname 下的内容
    console.error('[main] Contents of __dirname:', fs.readdirSync(__dirname))
    return
  }

  console.log('[main] Using distDir:', distDir)

  server = http.createServer((req, res) => {
    let urlPath = req.url.split('?')[0].split('#')[0]

    // 处理根路径
    if (urlPath === '/' || urlPath === '') {
      urlPath = 'index.html'
    }

    // 解码 URL（将 %20 等编码还原，以支持带空格的图片文件名）
    urlPath = decodeURIComponent(urlPath)

    // 移除前导斜杠
    urlPath = urlPath.replace(/^\//, '')

    let filePath = path.join(distDir, urlPath)
    console.log('[http]', req.url, '->', filePath)

    if (!filePath.startsWith(distDir)) {
      res.writeHead(403, { 'Content-Type': 'text/html' })
      res.end('<h1>403 Forbidden</h1>')
      return
    }

    const extname = path.extname(filePath).toLowerCase()
    const contentTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.png': 'image/png',
      '.ico': 'image/x-icon',
    }
    const contentType = contentTypes[extname] || 'text/plain'

    fs.readFile(filePath, (err, content) => {
      if (err) {
        console.error('[http 404]', req.url, err.code)
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>404 Not Found</h1><p>' + req.url + '</p>')
        return
      }
      console.log('[http 200]', req.url, '(' + content.length + ' bytes)')
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf-8')
    })
  })

  server.listen(PORT, '127.0.0.1', () => {
    console.log('[main] Server listening on http://127.0.0.1:' + PORT)

    const win = new BrowserWindow({
      width: 1200,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },
    })

    win.loadURL('http://127.0.0.1:' + PORT)

    win.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
      console.error('[main] Load failed:', errorCode, errorDescription)
    })

    win.webContents.on('did-finish-load', () => {
      console.log('[main] Page loaded:', win.webContents.getURL())
    })

    win.on('closed', () => {
      _mainWindow = null
    })

    _mainWindow = win
  })

  server.on('error', (err) => {
    console.error('[main] Server error:', err)
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (server) server.close()
  if (process.platform !== 'darwin') app.quit()
})
