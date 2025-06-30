Feature: Login
  Eu como usuário
  Gostaria de fazer Login
  Para acessar o sistema

  Scenario: Login com Sucesso
    Given eu preencho o email
    And eu preencho a senha
    When eu clico em Entrar
    Then eu vejo o botão Salvar
