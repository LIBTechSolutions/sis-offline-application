const {Menu} = require('electron')

function setMainMenu () {
  const template = [
    {
      label: 'New',
      submenu: [
        {
          label: 'Registration',
          accelerator: 'CmdOrCtrl+R',
          click () {
            console.log('Oh, hey there!')
          }
        },
        {
          type: 'separator'
        },
        {
          label: 'Grade Info',
          accelerator: 'CmdOrCtrl+G',
          click () {
            console.log('Oh, hey!')
          }
        },
        {
          label: 'Fee Info',
          accelerator: 'CmdOrCtrl+F',
          click () {
            console.log('Oh, hey what?!')
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Registration',
          accelerator: 'Shift+CmdOrCtrl+H',
          click () {
            console.log('Oh, hi there!')
          }
        },
        {
          label: 'Grade',
          accelerator: 'Shift+CmdOrCtrl+H',
          click () {
            console.log('Oh, hi there!')
          }
        },
        {
          label: 'Fee',
          accelerator: 'Shift+CmdOrCtrl+H',
          click () {
            console.log('Oh, hi there!')
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Registration',
          accelerator: 'Shift+CmdOrCtrl+H',
          click () {
            console.log('Oh, hi there!')
          }
        },
        {
          label: 'Grade Info',
          accelerator: 'Shift+CmdOrCtrl+H',
          click () {
            console.log('Oh, hi there!')
          }
        },
        {
          label: 'Fee Info',
          accelerator: 'Shift+CmdOrCtrl+H',
          click () {
            console.log('Oh, hi there!')
          }
        }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Documentation',
          accelerator: 'Shift+CmdOrCtrl+H',
          click () {
            console.log('Oh, hi there!')
          }
        }
      ]
    }
  ]
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}

module.exports.setMainMenu = setMainMenu
