const electron = require('electron');
const { app } = electron;

//event handler to watch
app.on('ready', () => {
    console.log('app is now ready!');
});