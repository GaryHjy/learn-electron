const { app, BrowserWindow} = require('electron')

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.show();

  win.loadFile('index.html');
  
  win.on('close', () => {
    win = null;
  })
})

app.on('window-all-closed', () => {
  app.quit();
})

