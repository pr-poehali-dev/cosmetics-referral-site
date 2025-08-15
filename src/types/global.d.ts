declare global {
  interface Window {
    prmo?: (action: string, data?: any) => void;
  }
}

export {};