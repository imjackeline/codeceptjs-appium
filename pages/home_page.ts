import { fields } from "./login_page";

const { I } = inject();

const home_page = {
  button: {
    save: '~salvar',
  },

  fields: {
    code:'~codigo',
    nome:'~aluno',
    search:'~search'
  },

  registerStudents(code,nome){
    I.fillField(this.fields.code, code),
    I.fillField(this.fields.nome, nome)
    I.tap(this.button.save)
  },

  searchStudents(search, check){
    I.fillField(this.fields.search, search),
    I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]')
  },

  checkLoginSuccess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  }
};

export = home_page;
