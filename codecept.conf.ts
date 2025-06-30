exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      host: '127.0.0.1',
      port: 4723,
      path: '/',
      app: 'C:/Users/User/Downloads/QAZANDO/Appium/app-release.apk',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'Pixel',
        platformVersion: '9',
        automationName: 'UiAutomator2'
      }
    }
  },
  include: {
    I: './steps_file.ts',
    login_page: './pages/login_page.ts',
    home_page: './pages/home_page.ts'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
 /* gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.ts']
  },*/
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './steps/*_test.ts',
  name: 'automation-appium'
}