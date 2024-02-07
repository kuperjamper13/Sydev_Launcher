const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the index.html file
  mainWindow.loadFile(path.join(__dirname, 'templates/index.html'));

  Menu.setApplicationMenu(null)

  // Event when the window is closed
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url); // Open URL in user's browser.
    return { action: "deny" }; // Prevent the app from opening the URL.
  })
  
}


// Create the main window when the app is ready
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// Create a new window when the app is activated (on macOS)
app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
