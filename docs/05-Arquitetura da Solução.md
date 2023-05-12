# Arquitetura da Solução

A arquitetura da aplicação é um conceito essencial no desenvolvimento de software, pois define a estrutura, os componentes e as interações dentro de um sistema de software. Neste tópico, vamos detalhar como será o modelo dos objetos e seus relacionamentos, utilizando diagramas UML para uma maior visibilidade das regras de negócio, que vão auxiliar o processo de implementação e manutenção do sistema proposto.

## Diagrama de Classes

O diagrama de classe é uma representação visual da estrutura e das relações entre as classes de um sistema orientado a objetos. Ele fornece uma visão abstrata dos objetos que compõem o sistema, bem como seus atributos e métodos.

A figura abaixo ilustra o diagrama de classes para o sistema proposto.

![imagem diagrama de classe ShapeUp](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/74150353-c90d-4a6c-9b75-b486b0c879ec)

## Modelo ER

O diagrama Entidade-Relacionamento (ER) é uma ferramenta gráfica usada para modelar e representar a estrutura lógica de um banco de dados. Ele é amplamente utilizado na fase de projeto de sistemas de banco de dados, permitindo visualizar as entidades (objetos) envolvidas no sistema e as relações entre elas.

A figura abaixo ilustra o diagrama de Entidade-Relacionamento para o sistema proposto.

![imagem modelo ER shapeUp](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/82043220/4fba6ba7-c8b7-4b39-8902-5f06169ac956)

O diagrama de Entidade-Relacionamento trabalha em conjunto com o diagrama de classe, para mais informações sobre os objetos do sistema veja: [Diagrama de Classe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/edit/main/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md#diagrama-de-classes).

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

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
