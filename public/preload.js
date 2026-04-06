const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // Store operations
  storeGet: (key) => ipcRenderer.invoke('store-get', key),
  storeSet: (key, value) => ipcRenderer.invoke('store-set', key, value),
  storeDelete: (key) => ipcRenderer.invoke('store-delete', key),

  // Updates
  checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
  onUpdateAvailable: (callback) => ipcRenderer.on('update-available', callback),
  onUpdateDownloaded: (callback) => ipcRenderer.on('update-downloaded', callback),
  quitAndInstall: () => ipcRenderer.send('quit-and-install'),

  // App info
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
});
