const electron = require('electron');
const { app, BrowserWindow } = electron;

//event handler to watch
app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});