# Banco API Test

## 📌 Descrição
Este projeto tem como objetivo realizar a automação de testes de API REST para o sistema disponível em:
https://github.com/vitorlardera/banco-api

Os testes garantem a validação dos endpoints, regras de negócio e comportamento esperado da API.

---

## 🎯 Objetivo
- Validar endpoints REST
- Garantir regras de negócio
- Automatizar testes de regressão
- Gerar relatórios de execução

---

## 🛠️ Stack Utilizada
- JavaScript (Node.js)
- Mocha
- Chai
- Supertest
- Mochawesome
- dotenv

---

## 📁 Estrutura de Diretórios

```
banco-api-test/
├── test/              # Arquivos de teste
├── mochawesome/       # Relatórios gerados
├── package.json       # Dependências do projeto
├── .env               # Variáveis de ambiente (não versionado)
└── README.md
```

---

## ⚙️ Configuração do Ambiente

### 1. Clonar o repositório
```
git clone https://github.com/vitorlardera/banco-api-test
cd banco-api-test
```

### 2. Instalar dependências
```
npm install
```

---

## 🔐 Arquivo .env

Crie um arquivo `.env` na raiz do projeto com o seguinte formato:

```
BASE_URL=http://localhost:3000
```

> Substitua a URL conforme o ambiente onde a API estiver rodando.

---

## ▶️ Execução dos Testes

Para executar os testes:

```
npm test
```

---

## 📊 Relatórios (Mochawesome)

Após a execução dos testes, um relatório HTML será gerado automaticamente no diretório:

```
/mochawesome
```

Abra o arquivo `.html` no navegador para visualizar os resultados.

---

## 📚 Documentação das Dependências

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Supertest: https://github.com/ladjs/supertest
- Mochawesome: https://github.com/adamgruber/mochawesome
- dotenv: https://www.npmjs.com/package/dotenv

---

## 👨‍💻 Autor
Projeto criado por Vitor Lardera
