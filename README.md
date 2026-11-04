# Testes automatizados do Banco Web

## Objetivo

Este projeto é uma prática de testes automatizados com Cypress, desenvolvida durante a Mentoria em Testes de Software 2.0. Os testes end-to-end verificam fluxos de login e transferência na aplicação Banco Web.

## Componentes do projeto

- `package.json`: metadados, scripts e dependências do projeto. As dependências são instaladas com `npm install`.
- `cypress.config.js`: configuração do Cypress; define `http://localhost:4000` como endereço base da aplicação web.
- `cypress/e2e/`: especificações dos testes:
  - `login.cy.js`: valida o acesso com credenciais válidas e a mensagem de erro com credenciais inválidas.
  - `transferencia.cy.js`: valida uma transferência bem-sucedida e a mensagem de saldo insuficiente para uma transferência acima de 5 mil.
- `cypress/fixtures/credenciais.json`: credenciais de teste usadas nos cenários de login.
- `cypress/support/commands/`: comandos customizados reutilizáveis, descritos abaixo.
- `cypress/support/e2e.js` e `cypress/support/commands.js`: carregam os comandos antes da execução das especificações.
- `cypress/reports/`, `cypress/screenshots/` e `cypress/videos/`: diretórios para relatórios e artefatos das execuções.

## Pré-requisitos

- Node.js e npm instalados.
- API e aplicação web em execução antes de iniciar os testes:
  - [banco-api](https://github.com/juliodelimas/banco-api)
  - [banco-web](https://github.com/juliodelimas/banco-web)

Consulte as instruções de cada repositório para instalar e iniciar a API e a aplicação. A aplicação web deve estar acessível em `http://localhost:4000`, conforme o `baseUrl` configurado no Cypress.

## Instalação

Clone este repositório e, a partir da pasta do projeto, instale as dependências declaradas no `package.json`:

```bash
npm install
```

## Execução

Inicie a API e a aplicação web e, em seguida, execute um dos comandos na raiz deste projeto:

```bash
# Executar todos os testes em modo headless
npm test

# Executar os testes com o navegador visível
npm run cy:headed

# Abrir a interface interativa do Cypress
npm run cy:open
```

## Testes automatizados

| Arquivo | Cenários |
| --- | --- |
| `cypress/e2e/login.cy.js` | Login válido: confirma a exibição da tela de transferência. Login inválido: confirma a mensagem de erro no toast. |
| `cypress/e2e/transferencia.cy.js` | Transferência válida: confirma a mensagem de sucesso. Valor superior a 5 mil: confirma a mensagem de saldo insuficiente. |

## Custom Commands

Os comandos customizados ficam em `cypress/support/commands/` e são importados por `cypress/support/commands.js`.

| Comando | Arquivo | Descrição |
| --- | --- | --- |
| `cy.fazerLoginComCredenciaisValidas()` | `login.js` | Lê as credenciais válidas de `credenciais.json`, preenche usuário e senha e envia o formulário. |
| `cy.fazerLoginComCredenciaisInvalidas()` | `login.js` | Lê as credenciais inválidas do fixture, preenche o formulário e tenta entrar. |
| `cy.realizarTransferencia(contaOrigem, contaDestino, valor)` | `transferencia.js` | Seleciona as contas de origem e destino, preenche o valor e envia a transferência. |
| `cy.selecionarOpcaoCombobox(labelDoCampo, opcao)` | `common.js` | Seleciona uma opção em um campo combobox identificado pelo seu label. |
| `cy.verificarMensagemNoToast(mensagem)` | `common.js` | Verifica se o toast exibe a mensagem informada. |

## Relatórios

O diretório `cypress/reports/html` contém os arquivos de relatório HTML. Embora o projeto tenha um relatório nesse local, a configuração e o `package.json` atuais não incluem o `cypress-mochawesome-reporter`; portanto, a geração automática desse relatório ainda não está configurada neste repositório.

Use credenciais exclusivas do ambiente de teste em `cypress/fixtures/credenciais.json`; não armazene credenciais reais nesse arquivo.
