Feature ('Students');

const { I, login_page, home_page} = inject(); 
const code = require('../Utils/code')
const names = require('../Utils/name')

Scenario('Adicionar estudante com sucesso', () => {

    const myCode = code.getCode()
    const myName = names.getName()

  login_page.doLogin('teste@teste.com','123456'),
  home_page.registerStudents(myCode, myName),
  home_page.searchStudents(myName, myCode)
});