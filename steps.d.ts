/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    login_page:  import('./pages/login_page');
    home_page:  import('./pages/home_page');
  }

  interface Methods extends Appium {}

  interface I extends ReturnType<steps_file> {}

  namespace Translation {
    interface Actions {}
  }
}
