const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const { autoUpdater } = require('electron-updater');
const Store = require('electron-store');

// Inicializar store para dados locais
const store = new Store();

let mainWindow;
let isQuitting = false;

// Criar janela principal
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, '../assets/icon.png'),
  });

  const startUrl = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('close', (e) => {
    if (!isQuitting) {
      e.preventDefault();
      mainWindow.hide();
    }
  });
}

// Criar menu
function createMenu() {
  const template = [
    {
      label: 'Arquivo',
      submenu: [
        {
          label: 'Sair',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            isQuitting = true;
            app.quit();
          },
        },
      ],
    },
    {
      label: 'Editar',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
      ],
    },
    {
      label: 'Exibir',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      label: 'Ajuda',
      submenu: [
        {
          label: 'Sobre',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'Sobre Gym CRM',
              message: 'Gym CRM v1.0.0',
              detail: 'Sistema profissional de gestão para academias.\nDesenvolvido por Graphics Vision © 2026',
            });
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// IPC Handlers para sincronização de dados
ipcMain.handle('store-get', (event, key) => {
  return store.get(key);
});

ipcMain.handle('store-set', (event, key, value) => {
  store.set(key, value);
});

ipcMain.handle('store-delete', (event, key) => {
  store.delete(key);
});

// Auto-update
ipcMain.handle('check-for-updates', async () => {
  try {
    const result = await autoUpdater.checkForUpdatesAndNotify();
    return result;
  } catch (error) {
    console.error('Erro ao verificar atualizações:', error);
    return null;
  }
});

// Eventos do app
app.on('ready', () => {
  createWindow();
  createMenu();
  
  // Verificar atualizações
  if (!isDev) {
    autoUpdater.checkForUpdatesAndNotify();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  } else {
    mainWindow.show();
  }
});

// Handle squirrel events (Windows installer)
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Auto-update events
autoUpdater.on('update-available', () => {
  mainWindow?.webContents.send('update-available');
});

autoUpdater.on('update-downloaded', () => {
  mainWindow?.webContents.send('update-downloaded');
});

ipcMain.on('quit-and-install', () => {
  autoUpdater.quitAndInstall();
});
