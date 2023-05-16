# Programação de Funcionalidades

A programação de funcionalidades é uma etapa essencial no desenvolvimento de software, que envolve a criação e implementação de recursos específicos para atender às necessidades dos usuários. Nesse processo, os programadores utilizam linguagens de programação e frameworks para traduzir requisitos em código funcional. As funcionalidades desenvolvidas estão relacionadas aos requisitos funcionais e não funcionais do sistema,
veja: **[Requisitos]()**.

Abaixo está um diagrama que exemplifica a comunicação entre as telas da aplicação, de modo a dar uma visão mais ampla sobre como será a integração entre as funcionalidades do sistemas. Para uma visão geral da arquitetura da aplicação veja: **[Arquitetura da solução]()** e **[Projeto de Interface]()**.

![Wireflow](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/f1d67542-9c15-4e28-a268-2977119112f6)

Para acessar os arquivos de código da aplicação, leia a documentação de utilização **[aqui](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app)**, faça o download do código fonte, e navegue até a pasta raiz **[shape-up]()** e abra em seu editor de código.

O projeto está estruturado da seguinte forma:

- 📁 **[src]()** - `Contém os códigos da aplicação.`
  - 📁 **[components]()** - `Contém os componentes da aplicação.`
  - 📁 **[pages]()** - `Contém as páginas da aplicação.`
  - 📁 **[services]()** - `Contém os serviços da aplicação.`

Foram utilizados alguns recursos externos, como bibliotecas e serviços web. Veja **[Arquitetura da Solução]()** para ter uma visão geral dos recursos utilizados.

## Autenticação

A autenticação é um processo crucial na segurança de sistemas e aplicativos, que visa verificar a identidade de um usuário ou dispositivo antes de conceder acesso a determinados recursos. Estão relacionados a essa funcionalidade o Cadastro e Login do usuário, permitindo que ele acesse a aplicação usando seus dados cadastrados.

### Requisitos relacionados

Abaixo está uma relação de requisitios que essa funcionalidade busca atender, sendo requisitos funcionais e requisitos não funcionais.

#### Requisitos Funcionais
- **[RF-001]()**: Permitir que o usuário crie uma conta no aplicativo.
 
#### Requisitos não funcionais
- **[RNF-001]()**: O Sistema deve ser responsivo para rodar em dispositivos móveis.
- **[RNF-002]()**: O Tempo de consulta deverá ser de no máximo 2s.
- **[RNF-003]()**: O Sistema deve manter o mesmo padrão de ícones para todas as páginas.
- **[RNF-005]()**: O Sistema deve manter o mesmo padrão de cores para todas as páginas.

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

Para acessar os arquivos de código da aplicação, leia a documentação de utilização **[aqui](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/tree/main/app)**, faça o download do código fonte, e navegue até a pasta raiz **[shape-up]()** e abra em seu editor de código.

Abaixo está a listagem dos artefatos gerados pela funcionalida de **Autenticação**, sendo alguns desses recursos compartilhados entre outras funcionalidades.

- 📁 **[src]()**
  - 📁 **[Components]()**
    - 📄 [Card.js]() - `Component utilizado para criação dos cards das páginas.`
    - 📄 [InputEmailCard.js]() - `Componente para a entrada do email do usuário na página de cadastro.`
    - 📄 [InputImageCard.js]() - `Componente para a entrada da foto de perfil do usuário na página de cadastro.`
    - 📄 [InputNameCard.js]() - `Componente para a entrada do nome de usuário na página de cadastro.`
    - 📄 [InputPasswordCard.js]() - `Componente para a entrada da senha do usuário na página de cadastro.`
  - 📁 **[pages]()**
    - 📄 [CadastrePage.js]() - `Página de cadastro.`
    - 📄 [LoginPage.js]() - `Página de login.`
  - 📁 **[services]()**
    - 📄 [auth.services.js]() - `Contém todas as funções de autenticação do usuário.`
    - 📄 [userdata.services.js]() - `Contém todas as funções de armazenamento e recuperação de informações do usuário.`


### Desenvolvedores

- **[Raul Oliveira]()**
