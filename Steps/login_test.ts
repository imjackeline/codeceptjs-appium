import { before } from "node:test";

Feature('login');

const { I, login_page} = inject(); 

BeforeSuite( () => { //serve para executar algo antes no primeiro cenário
  console.log('Before Suite')
});

Before( () => { //serve para executar algo sempre antes de cada teste
  console.log('Before')
});

AfterSuite( () => { //serve para executar algo sempre depois do ultimo cenario
  console.log('After Suite')
});

After( () => { //serve para executar algo sempre depois de cada teste
  console.log('After')
});

Scenario('Login Sucesso', ({ home_page }) => {
  login_page.doLogin('teste@teste.com', '123456');
  home_page.checkLoginSuccess();
});

Scenario('Login invalido', () => {
  login_page.doLogin('teste1aa@teste.com', '1');
  login_page.checkLoginError();
});
