const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const ffmpeg = require('fluent-ffmpeg');
let mainWindow;

//event handler to watch
app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('videoData', (event, path) => {
    ffmpeg.ffprobe(path, (err, metadata) => {
        // console.log('Video duration is:', metadata.format.duration);
        mainWindow.webContents.send('video:metadata', metadata.format.duration);
    });
});