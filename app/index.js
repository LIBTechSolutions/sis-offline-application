const {app, BrowserWindow} = require('electron')
if (require('electron-squirrel-startup')) app.quit()
const path = require('path')
const url = require('url')


let win

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'resources/techsol-new-logo.jpg',
    backgroundColor: 'grey'
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, '../public/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
