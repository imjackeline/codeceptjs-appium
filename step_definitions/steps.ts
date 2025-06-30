//const { I } = inject();


Given('eu preencho o email', () => {
  I.retry(4).fillField('~email','teste@teste.com')
});

Given('eu preencho a senha', () => {
 I.fillField('~senha','123456')
});

When('eu clico em Entrar', () => {
  I.tap('~entrar')
});

Then('eu vejo o botão Salvar', () => {
  I.waitForElement('~salvar', 5)
    I.seeElement('~salvar')
});
