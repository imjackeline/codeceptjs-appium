const { I} = inject();

const login_page = {
  fields: {
    email: '~email',
    password: '~senha'
  },

  buttons: {
    enter: '~entrar'
  },

  messages:{
    loginError: '~lognFail'
  },

  doLogin(email, password) {
    I.retry(4).fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.tap(this.buttons.enter); 
  },

    checkLoginError() {
    I.waitForElement(this.messages.loginError, 5)
    I.retry(4).seeElement(this.messages.loginError) //repetir o passo x vezes caso falhar
  },

  
};

  export = login_page; // <- exportação correta para uso com steps.d.ts
