const { ipcMain } = require('electron')

ipcMain.on('port', (event, arg) => {
    console.log(arg)
    event.reply('port', 'pong')
})

//ipcMain.on('port', (event, arg) => {
  //  console.log(arg) // prints "ping"
//    event.returnValue = 'pong'
  //})