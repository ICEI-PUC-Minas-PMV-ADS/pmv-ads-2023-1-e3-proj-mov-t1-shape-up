# Instruções de utilização

O ShapeUp é uma aplicação feita em **[React Native](https://reactnative.dev/)** e contém uma api que será desenvolvida em **[.NET](https://dotnet.microsoft.com/en-us/download/visual-studio-sdks)**, para começar a utilizar essa aplicação é necessário fazer algumas configurações iniciais para que o ambiente de desenvolvimento estava apto a rodar a aplicação.

## Ambiente de Desenvolvimento

Essa seção descreve os requisitos e processos para começar a trabalhar nesse projeto.

### Requisitos de desenvolvimento

Para que seja possível compilar e rodar o projeto na máquina local
é necessário a instalação dos seguintes itens na máquina de desenvolvimento:

- **[Node.js](https://nodejs.org/en/download)** (versão 12 ou superior)
- **[NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)** (Node Package Manager)
- **[.NET SDK](https://dotnet.microsoft.com/en-us/download/visual-studio-sdks)**(versão 7 ou superior)

### Baixar o repositório

Para clonar o repositório do projeto acesse o terminal e digite o seguinte comando:
```
git clone https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up
```
ou faça o download do repositório no **[Link](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/archive/refs/heads/main.zip)**.

## Iniciar o desenvolvimento

### Aplicação mobile

Para trabalhar com a aplicação mobile verifique se você já tem o **[Node.js](https://nodejs.org/en)** instalado executando o seguinte comando no terminal:

```
npm -v
```

Caso o comando retorne um erro, veja a seção **[Requisitos de desenvolvimento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/edit/main/app/README.md#requisitos-de-desenvolvimento)** para instalar no seu computador.

Após fazer o download do repositório, acesse a pasta **[shape-up](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up)** do projeto, abra o terminal e execute
os seguinte comandos:

```
npm install
```
Após baixar todas as dependências, execute os seguintes comandos para iniciar a aplicação:

```
npm run start
```
### Web Api

Para trabalhar com a web api verifique se você já tem o **[.NET SDK](https://dotnet.microsoft.com/en-us/download/visual-studio-sdks)** instalado executando o seguinte comando no terminal:

```
dotnet --list-sdks
```
Caso o comando retorne um erro ou o sdk 7 não seja listado, veja a seção **[Requisitos de desenvolvimento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/edit/main/app/README.md#requisitos-de-desenvolvimento)** para instalar no seu computador.

Após fazer o download do repositório, acesse a pasta **[shape-up-backend-api](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up-backend-api)** do projeto, abra o terminal e execute
os seguinte comandos:

```
dotnet shape-up-backend-api
```

## Releases

### Release 0.1.0 | Lançamento inicial

#### Funcionalidades
- RF-001
- RF-002



