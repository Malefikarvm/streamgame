const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');


let createWindow = () => {
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
    var mainWindow = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true,
            //preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.setFullScreen(true);
    mainWindow.setMenu(null);
    mainWindow.loadFile('game/index.html');

    //Nos permite visualizar la consola de desarrollo de chrome
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});
