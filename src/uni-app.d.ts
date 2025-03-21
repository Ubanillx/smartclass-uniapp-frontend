declare const uni: {
  navigateTo(options: {
    url: string;
    animationType?: string;
    animationDuration?: number;
    events?: Record<string, any>;
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: () => void;
  }): void;
  
  navigateBack(options?: {
    delta?: number;
    animationType?: string;
    animationDuration?: number;
  }): void;
  
  showToast(options: {
    title: string;
    icon?: 'success' | 'loading' | 'none' | 'error';
    duration?: number;
    mask?: boolean;
    position?: 'top' | 'center' | 'bottom';
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: () => void;
  }): void;
  
  switchTab(options: {
    url: string;
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: () => void;
  }): void;
  
  showModal(options: {
    title: string;
    content: string;
    showCancel?: boolean;
    cancelText?: string;
    cancelColor?: string;
    confirmText?: string;
    confirmColor?: string;
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: () => void;
  }): void;
  
  hideLoading(options?: {
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: () => void;
  }): void;
  
  showLoading(options: {
    title: string;
    mask?: boolean;
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: () => void;
  }): void;
}; 