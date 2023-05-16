# Programação de Funcionalidades

A programação de funcionalidades é uma etapa essencial no desenvolvimento de software, que envolve a criação e implementação de recursos específicos para atender às necessidades dos usuários. Nesse processo, os programadores utilizam linguagens de programação e frameworks para traduzir requisitos em código funcional. As funcionalidades desenvolvidas estão relacionadas aos requisitos funcionais e não funcionais do sistema,
veja: **[Requisitos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos)**.

Abaixo está um diagrama que exemplifica a comunicação entre as telas da aplicação, de modo a dar uma visão mais ampla sobre como será a integração entre as funcionalidades do sistemas. Para uma visão geral da arquitetura da aplicação veja: **[Arquitetura da solução](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md)** e **[Projeto de Interface](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/04-Projeto%20de%20Interface.md#projeto-de-interface)**.

![Wireflow](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/f1d67542-9c15-4e28-a268-2977119112f6)

Para acessar os arquivos de código da aplicação, leia a documentação de utilização **[aqui](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app)**, faça o download do código fonte, e navegue até a pasta raiz **[shape-up](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up)** e abra em seu editor de código.

O projeto está estruturado da seguinte forma:

- 📁 **[src](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src)** - `Contém os códigos da aplicação.`
  - 📁 **[components](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src/Components)** - `Contém os componentes da aplicação.`
  - 📁 **[pages](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src/pages)** - `Contém as páginas da aplicação.`
  - 📁 **[services](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src/services)** - `Contém os serviços da aplicação.`

Foram utilizados alguns recursos externos, como bibliotecas e serviços web. Veja **[Arquitetura da Solução](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md)** para ter uma visão geral dos recursos utilizados.

## Autenticação

A autenticação é um processo crucial na segurança de sistemas e aplicativos, que visa verificar a identidade de um usuário ou dispositivo antes de conceder acesso a determinados recursos. Estão relacionados a essa funcionalidade o Cadastro e Login do usuário, permitindo que ele acesse a aplicação usando seus dados cadastrados.

### Requisitos relacionados

Abaixo está uma relação de requisitios que essa funcionalidade busca atender, sendo requisitos funcionais e requisitos não funcionais.

#### Requisitos Funcionais
- **[RF-001](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos-funcionais)**: Permitir que o usuário crie uma conta no aplicativo.
 
#### Requisitos não funcionais
- **[RNF-001](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos-n%C3%A3o-funcionais)**: O Sistema deve ser responsivo para rodar em dispositivos móveis.
- **[RNF-002](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos-n%C3%A3o-funcionais)**: O Tempo de consulta deverá ser de no máximo 2s.
- **[RNF-003](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos-n%C3%A3o-funcionais)**: O Sistema deve manter o mesmo padrão de ícones para todas as páginas.
- **[RNF-005](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos-n%C3%A3o-funcionais)**: O Sistema deve manter o mesmo padrão de cores para todas as páginas.

### Preview

<table>
  <tr>
    <td width='330'>Página de Login</td>
    <td width='330'>Página de Cadastro - Registro de nome</td>
    <td width='330'>Página de Cadastro - Registro de email</td>
  </tr>
  <tr>
    <td><img src='https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/60970e44-8df8-487f-a865-dcdea3fd3f01'/></td>
    <td><img src='https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/e51c4eb4-5f3f-4375-b03f-1e966d1c5c1c'/></td>
    <td><img src='https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/808bb997-6fc9-4510-825c-24aecfce2f2f'/></td>
  </tr>
</table>


<table>
  <tr>
    <td width='330'>Página de Cadastro - Registro de Imagem</td>
    <td width='330'>Página de Cadastro - Registro de senha</td>
  </tr>
  <tr>
    <td><img src='https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/6ae60cdc-c0be-45f3-80c7-5732c8a607f7'/></td>
    <td><img src='https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/fdbee7ae-0b55-4604-9f70-37a8c1b58780'/></td>
  </tr>
</table>

### Código fonte

Para acessar os arquivos de código da aplicação, leia a documentação de utilização **[aqui](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app)**, faça o download do código fonte, e navegue até a pasta raiz **[shape-up](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up)** e abra em seu editor de código.

Abaixo está a listagem dos artefatos gerados pela funcionalida de **Autenticação**, sendo alguns desses recursos compartilhados entre outras funcionalidades.

- 📁 **[src](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src)**
  - 📁 **[Components](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src/Components)**
    - 📄 [Card.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/Components/Card.js) - `Component utilizado para criação dos cards das páginas.`
    - 📄 [InputEmailCard.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/Components/InputEmailCard.js) - `Componente para a entrada do email do usuário na página de cadastro.`
    - 📄 [InputImageCard.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/Components/InputImageCard.js) - `Componente para a entrada da foto de perfil do usuário na página de cadastro.`
    - 📄 [InputNameCard.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/Components/InputNameCard.js) - `Componente para a entrada do nome de usuário na página de cadastro.`
    - 📄 [InputPasswordCard.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/Components/InputPasswordCard.js) - `Componente para a entrada da senha do usuário na página de cadastro.`
  - 📁 **[pages](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src/pages)**
    - 📄 [CadastrePage.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/pages/CadastrePage.js) - `Página de cadastro.`
    - 📄 [LoginPage.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/pages/LoginPage.js) - `Página de login.`
  - 📁 **[services](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src/services)**
    - 📄 [auth.services.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/services/auth.services.js) - `Contém todas as funções de autenticação do usuário.`
    - 📄 [userdata.services.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/services/userdata.services.js) - `Contém todas as funções de armazenamento e recuperação de informações do usuário.`


### Desenvolvedores

- **[Raul Oliveira](https://github.com/RaulShinaede)**


## Página Principal

A página principal está relacionada com a listagem dos treinos do usuário, e é responsável por exibir os dados e permitir que o usuário interaja com os treinos ou avançar para uma lista de tutoriais de treinos.

### Requisitos relacionados

Abaixo está uma relação de requisitios que essa funcionalidade busca atender, sendo requisitos funcionais e requisitos não funcionais.

#### Requisitos Funcionais
- **[RF-008](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos-funcionais)**: Permitir que o usuário visualize os treinos cadastrados.
 
#### Requisitos não funcionais
- **[RNF-001](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos-n%C3%A3o-funcionais)**: O Sistema deve ser responsivo para rodar em dispositivos móveis.
- **[RNF-002](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos-n%C3%A3o-funcionais)**: O Tempo de consulta deverá ser de no máximo 2s.
- **[RNF-003](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos-n%C3%A3o-funcionais)**: O Sistema deve manter o mesmo padrão de ícones para todas as páginas.
- **[RNF-005](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md#requisitos-n%C3%A3o-funcionais)**: O Sistema deve manter o mesmo padrão de cores para todas as páginas.

### Preview

<table>
  <tr>
    <td width='330'>Página Home</td>
  </tr>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/102563767/236699882-9fe2ad5f-addf-4956-b740-2d77bae8cd31.png'/></td>
  </tr>
</table>

### Código fonte

Para acessar os arquivos de código da aplicação, leia a documentação de utilização **[aqui](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app)**, faça o download do código fonte, e navegue até a pasta raiz **[shape-up](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up)** e abra em seu editor de código.

Abaixo está a listagem dos artefatos gerados pela funcionalidade **Página Principal**.

- 📁 **[src](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src)**
  - 📁 **[Components](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src/Components)**
    - 📄 [Header.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/Components/Header.js) - `Componente para o cabeçalho da aplicação.`
    - 📄 [Lista.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/Components/Lista.js) - `Componente para os elementos da Lista.`
    - 📄 [Tabbar.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/Components/Tabbar.js) - `Componente para o menu de navegação.`
  - 📁 **[pages](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app/shape-up/src/pages)**
    - 📄 [HomePage.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up/src/pages/HomePage.js) - `Página principal.`


### Desenvolvedores

- **[Bruno Sellas](https://github.com/brunosellas)**


