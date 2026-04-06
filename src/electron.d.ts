declare global {
  interface Window {
    electron: {
      storeGet: (key: string) => Promise<any>;
      storeSet: (key: string, value: any) => Promise<void>;
      storeDelete: (key: string) => Promise<void>;
      checkForUpdates: () => Promise<any>;
      onUpdateAvailable: (callback: () => void) => void;
      onUpdateDownloaded: (callback: () => void) => void;
      quitAndInstall: () => void;
      getAppVersion: () => Promise<string>;
    };
  }
}

export {};
