export {};

declare module "vue" {
  type Hooks = App.AppInstance & Page.PageInstance;
  interface ComponentCustomOptions extends Hooks {}
}

// 声明全局uni对象
declare const uni: Uni;
interface Uni {
  showToast(options: {
    title: string;
    icon?: 'success' | 'loading' | 'none' | 'error';
    duration?: number;
    mask?: boolean;
    position?: 'top' | 'center' | 'bottom';
    complete?: () => void;
  }): void;
  navigateBack(options?: {
    delta?: number;
    animationType?: string;
    animationDuration?: number;
  }): void;
  navigateTo(options: {
    url: string;
    animationType?: string;
    animationDuration?: number;
    events?: Record<string, any>;
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
  // 可以根据需要添加更多方法
}