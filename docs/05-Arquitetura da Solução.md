# Arquitetura da Solução

A arquitetura da aplicação é um conceito essencial no desenvolvimento de software, pois define a estrutura, os componentes e as interações dentro de um sistema de software. Neste tópico, vamos detalhar como será o modelo dos objetos e seus relacionamentos, utilizando diagramas UML para uma maior visibilidade das regras de negócio, que vão auxiliar o processo de implementação e manutenção do sistema proposto.

## Diagrama de Classes

O diagrama de classe é uma representação visual da estrutura e das relações entre as classes de um sistema orientado a objetos. Ele fornece uma visão abstrata dos objetos que compõem o sistema, bem como seus atributos e métodos.

A figura abaixo ilustra o diagrama de classes para o sistema proposto.

![imagem diagrama de classe ShapeUp](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/74150353-c90d-4a6c-9b75-b486b0c879ec)

## Modelo ER

O modelo Entidade-Relacionamento (MER) é uma representação visual dos dados e relacionamentos das entidades do sistema. No MER, as entidades são representadas por retângulos, cada um com seu nome correspondente,
e os relacionamentos são representados com losangos, com sua respectiva interação entre as entidades.

A figura abaixo ilustra o modelo de Entidade-Relacionamento para o sistema proposto.

![imagem do modelo entidade relacionamento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/60eeda32-9d0f-4511-a296-d6bae545857b)

O modelo de Entidade-Relacionamento trabalha em conjunto com o diagrama de classe, para mais informações sobre os objetos do sistema veja: [Diagrama de Classe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md#diagrama-de-classes).

## Esquema Relacional

O Esquema Relacional é uma ferramenta gráfica usada para modelar e representar a estrutura lógica de um banco de dados. Ele é amplamente utilizado na fase de projeto de sistemas de banco de dados, permitindo visualizar as entidades (objetos) envolvidas no sistema e as relações entre elas.

A figura abaixo ilustra o esquema relacional para o sistema proposto.

![imagem esquema relacional](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/4fba6ba7-c8b7-4b39-8902-5f06169ac956)

O Esquema Relacional trabalha em conjunto com o Modelo ER, para mais informações sobre os objetos do sistema **veja**: [Modelo ER](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md#modelo-er).

## Modelo Físico

O Modelo Físico contém o código necessário para gerar o banco de dados da aplicação, com todas as entidades como tabelas, e seus atributos como linhas dessas tabelas.
O Modelo Físico trabalha em conjunto com o Esquema Relacional, **veja**: [Esquema relacional](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md#esquema-relacional).

O script de criação do banco foi gerado usando o Esquema Relacional apartir da ferramenta [Lucidchart](), e é gerado com a seguinte estrutura:

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

ou acessando o Link: [**ShapeUpDB.sql**]().


## Tecnologias Utilizadas

|Função    | Tecnologia  | 
|------------|-----------------------------------------|
| Linguagem | JavaScript | 
| Framework | ReactNative | 
| Bibliotecas | NativeBase, React Navigation, Json server, Json server auth, Axios | 
| IDE | Visual Studio Code | 
| Ferramentas | Microsoft Teams, GitHub, Whatsapp | 
| Banco de dados | SQL SERVER | 

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
