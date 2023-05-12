# Arquitetura da Solução

A arquitetura da aplicação é um conceito essencial no desenvolvimento de software, pois define a estrutura, os componentes e as interações dentro de um sistema de software. Neste tópico, vamos detalhar como será o modelo dos objetos e seus relacionamentos, utilizando diagramas UML para uma maior visibilidade das regras de negócio, que vão auxiliar o processo de implementação e manutenção do sistema proposto.

## Diagrama de Classes

O diagrama de classe é uma representação visual da estrutura e das relações entre as classes de um sistema orientado a objetos. Ele fornece uma visão abstrata dos objetos que compõem o sistema, bem como seus atributos e métodos.

A figura abaixo ilustra o diagrama de classes para o sistema proposto.

![imagem diagrama de classe ShapeUp](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/2f2881ad-869d-4004-beb2-9e5db8a1a4e0)

## Modelo ER

O modelo Entidade-Relacionamento (MER) é uma representação visual dos dados e relacionamentos das entidades do sistema. No MER, as entidades são representadas por retângulos, cada um com seu nome correspondente,
e os relacionamentos são representados com losangos, com sua respectiva interação entre as entidades.

A figura abaixo ilustra o modelo de Entidade-Relacionamento para o sistema proposto.

![imagem do modelo entidade relacionamento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/92395d36-b88b-4899-ada4-bc246d83f5bb)

O modelo de Entidade-Relacionamento trabalha em conjunto com o diagrama de classe, para mais informações sobre os objetos do sistema veja: [Diagrama de Classe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md#diagrama-de-classes).

## Esquema Relacional

O Esquema Relacional é uma ferramenta gráfica usada para modelar e representar a estrutura lógica de um banco de dados. Ele é amplamente utilizado na fase de projeto de sistemas de banco de dados, permitindo visualizar as entidades (objetos) envolvidas no sistema e as relações entre elas.

A figura abaixo ilustra o esquema relacional para o sistema proposto.

![imagem esquema relacional](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/4fba6ba7-c8b7-4b39-8902-5f06169ac956)

O Esquema Relacional trabalha em conjunto com o Modelo ER, para mais informações sobre os objetos do sistema **veja**: [Modelo ER](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md#modelo-er).

## Modelo Físico

O Modelo Físico contém o código necessário para gerar o banco de dados da aplicação, com todas as entidades como tabelas, e seus atributos como linhas dessas tabelas.
O Modelo Físico trabalha em conjunto com o Esquema Relacional, **veja**: [Esquema relacional](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md#esquema-relacional).

O script de criação do banco foi gerado usando o Esquema Relacional apartir da ferramenta [Lucidchart](https://www.lucidchart.com), ele se destina ao banco de dados relacional [Postgres](https://www.postgresql.org
) e é gerado com a seguinte estrutura:

```sql
...

CREATE TABLE "User" (
  "email" nvarchar(50),
  "password" nvarchar(50),
  "name" nvarchar(50),
  "imageData" nvarchar,
  PRIMARY KEY ("email")
);

...
```

O modelo completo pode ser encontrado em:  
- **`pmv-ads-2023-1-e3-proj-mov-t1-shape-up/app/shape-up-db/ShapeUpDB.sql`**  

ou acessando o Link: [**ShapeUpDB.sql**](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/app/shape-up-db/ShapeUpDB.sql).


## Tecnologias Utilizadas

O desenvolvimento de software moderno depende de uma variedade de tecnologias para criar produtos eficientes e inovadores. Nesta seção, destacamos algumas das principais tecnologias utilizadas no processo de desenvolvimento do sistema proposto.

A imagem abaixo representa a comunicação entre algumas das tecnologias utilizadas no desenvolvimento do sistema:

![Diagrama em branco (4)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/10b141ab-c810-434d-aada-0a5b63666602)

Todas as tecnologias utilizadas no processo de desenvolvimento dessa solução estão listadas abaixo, separadas por tópicos e contém um breve resumo dos motivos de sua escolha.

### Linguagens

As linguagens de programação são a base do desenvolvimento de software. Dependendo dos requisitos e objetivos do projeto, diferentes linguagens podem ser utilizadas.

<table>
 <tr>
   <td colspan='2' align='center'><strong>Linguagens</strong></td>
 </tr>
 <tr>
   <td width='200' align='center'><strong>Linguagem</strong></td>
   <td width='800'><strong>Motivo da escolha</strong></td>
 </tr>
  <tr>
    <td align='center'><a href='https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript'>JavaScript</a></td>
   <td> O JavaScript (JS) foi pré-definido para a etapa de desenvolvimento do eixo 3 da <a href='https://www.pucminas.br/PucVirtual/Paginas/default.aspx'>PucMinas Virtual</a>, sendo a linguagem escolhida para o desenvolvimento mobile com react-native.</td>
 </tr>
  <tr>
   <td align='center'><a href='https://learn.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/'>C#</a></td>
   <td>O C# foi escolhido para o desenvolvimento da Api, sendo uma linguagem orientada à objetos e fortemente tipada, ela disponibiliza recursos que facilitam a criação de webapis.</td>
 </tr>
</table>

### Bibliotecas

As bibliotecas são conjuntos de código predefinido e reutilizável que fornecem funcionalidades específicas para facilitar o desenvolvimento de software. Elas são criadas para resolver problemas comuns e oferecer uma abordagem mais eficiente e rápida para a construção de aplicativos

<table>
 <tr>
   <td colspan='2' align='center'><strong>Bibliotecas</strong></td>
 </tr>
 <tr>
   <td width='200' align='center'><strong>Biblioteca</strong></td>
   <td width='800'><strong>Motivo da escolha</strong></td>
 </tr>
  <tr>
    <td align='center'><a href='https://nativebase.io/'>Native Base</a></td>
   <td>A biblioteca de componentes Native Base foi escolhida por proporcionar uma grande variedade de components e estilizações que auxiliam no processo de criação das páginas da aplicação.</td>
 </tr>
  <tr>
   <td align='center'><a href='https://www.npmjs.com/package/axios'>Axios</a></td>
   <td>A biblioteca Axios foi escolhida para o acesso a webapi, por ser muito objetiva e fácil de ser utilizada.</td>
 </tr>
  <tr>
   <td align='center'><a href='https://learn.microsoft.com/pt-br/ef/core/'>Entity Framework</a></td>
   <td>O Entity framework é um mapeador relacional de objeto (ORM) que permite o acesso a dados como objetos, é muito usado por apis desenvolvidas com .NET e fácil de ser utilizada.</td>
 </tr>
  <tr>
   <td align='center'><a href='https://github.com/react-native-async-storage/async-storage'>AsyncStorage</a></td>
   <td>O AsyncStorage é a biblioteca mais usual para armazenamento de dados localmente em dispositivos móveis.</td>
 </tr>
</table>

### Ambiente de desenvolvimento

Um ambiente de desenvolvimento padronizado e bem definido, permite que todos os desenvolvedores trabalhem em conjunto, evitando problemas de incompatibilidade entre ambientes de desenvolvimento.

<table>
 <tr>
   <td colspan='2' align='center'><strong>Ambiente de desenvolvimento</strong></td>
 </tr>
 <tr>
   <td width='200' align='center'><strong>Tecnologia</strong></td>
   <td width='800'><strong>Motivo da escolha</strong></td>
 </tr>
  <tr>
   <td align='center'><a href='https://code.visualstudio.com/'>Visual Studio Code</a></td>
   <td>O VS code é um editor de código aberto leve e com uma vasta variedade de recursos, que possibilita o desenvolvimento com react native em qualquer sistema operacional.</td>
 </tr>
  <tr>
   <td align='center'><a href='https://developer.android.com/studio'>Android Studio</a></td>
   <td>O Android Studio é uma IDE para desenvolvimento mobile, que conta com recursos de emulação de dispositivos móveis, permitindo um preview da aplicação enquanto em ambiente de desenvolvimento.</td>
 </tr>
</table>


### Serviços web

Os serviços web desempenham um papel fundamental no mundo digital de hoje, permitindo a comunicação e a troca de informações entre diferentes sistemas e aplicativos em todo o mundo. Esses serviços são essenciais para facilitar a integração de plataformas, o compartilhamento de dados e o desenvolvimento de soluções modernas e interconectadas.

<table>
 <tr>
   <td colspan='2' align='center'><strong>Serviços</strong></td>
 </tr>
 <tr>
   <td width='200' align='center'><strong>Serviço</strong></td>
   <td width='800'><strong>Motivo da escolha</strong></td>
 </tr>
  <tr>
   <td align='center'><a href='https://render.com/'>Render</a></td>
   <td>O Render é um web host gratuito que possibilita a hospedagem da api e do banco de dados da aplicação.</td>
 </tr>
</table>

### Comunicação

Uma comunicação rápida e eficaz desempenha um papel vital nos processos de desenvolvimento de uma aplicação, então é importante que os meios de comunicação sejam efetivos e acessíveis a todos.

<table>
 <tr>
   <td colspan='2' align='center'><strong>Comunicação</strong></td>
 </tr>
 <tr>
   <td width='200' align='center'><strong>Tecnologia</strong></td>
   <td width='800'><strong>Motivo da escolha</strong></td>
 </tr>
  <tr>
   <td align='center'><a href='https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software'>Microsoft Teams</a></td>
   <td>O Microsoft Teams facilita a comunicação durante todo o ciclo do projeto, contendo recursos de compartilhamento de tela que são essenciais para uma reunião mais assertiva.</td>
 </tr>
  <tr>
   <td align='center'><a href='https://www.whatsapp.com/'>Whatsapp</a></td>
   <td>O Whatsapp possibilita uma comunicação mais rápida entre os stakeholders, tornando a comunicação no projeto mais fluida e direta.</td>
 </tr>
</table>

### UI Design

Uma boa ferramenta de design de interface do usuário (UI) pode desempenhar um papel crucial no desenvolvimento de uma experiência de usuário eficaz e atraente.

<table>
 <tr>
   <td colspan='2' align='center'><strong>UI Design</strong></td>
 </tr>
 <tr>
   <td width='200' align='center'><strong>Tecnologia</strong></td>
   <td width='800'><strong>Motivo da escolha</strong></td>
 </tr>
  <tr>
   <td align='center'><a href='https://www.figma.com/'>Figma</href></td>
   <td>O Figma é um serviço web que permite a criação de design da aplicação de maneira simples e gratuita.</td>
 </tr>
</table>

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
