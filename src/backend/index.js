const { ipcMain } = require('electron')

ipcMain.on('blablabla', (event, arg) => {
    console.log(arg)

    event.replay('blablabla', 'pong')

})