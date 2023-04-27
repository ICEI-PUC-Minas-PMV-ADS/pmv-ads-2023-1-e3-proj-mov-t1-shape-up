# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas
Seguem demonstradas por meio dos quadros apresentados o levantamento feito das personas e suas características durante o processo de entendimento do problema:

<table>
  <tr>
   <td width="1000" colspan="5" align="center">Júlia Coimbra, 29 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="https://user-images.githubusercontent.com/102563767/234725878-51696541-ac72-4d6f-8494-79b8583de80d.jpeg"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Jornalista de Fofocas.</td>
   <tr>
    <td width="150" align="center">Aplicativos</td>
    <td width="210" align="center">Motivações</td>
    <td width="210" align="center">Frustrações</td>
    <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ●	Linkedin<br>
    ●	Instagram<br>
    ●	WhatsApp<br>
    ●	Telegram<br>
    ●	Teams<br>
    ●	Youtube<br>
    ●	Udemy<br>
    ●	Microsoft Office<br>
   </td>
   <td>
    ●	Ter uma rotina mais saudável e se preparar para a gravidez que planeja ter.
   </td>
   <td>
    ●	Não conseguir organizar uma rotina estável de treinos no seu dia a dia.<br>
    ●	Não ter conhecimento sobre quais exercícios fazer e como fazê-los.<br>
   </td>
   <td>
    ●	Estudar.<br>
    ●	Ler.<br>
    ●	Estudar outras línguas.<br>
    ●	Adquirir Soft Skills.<br>
   </td>
  </tr>
 </table>
 
 <table>
  <tr>
   <td width="1000" colspan="5" align="center">Pedro Henrique, 25 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="https://user-images.githubusercontent.com/102563767/234726028-54dcaff0-1e52-49a1-ae99-6c043a5829ca.png"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Advogado Trabalhista.</td>
   <tr>
    <td width="150" align="center">Aplicativos</td>
    <td width="210" align="center">Motivações</td>
    <td width="210" align="center">Frustrações</td>
    <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ●	Facebook<br>
    ●	Instagram<br>
    ●	WhatsApp<br>
    ●	Tse<br>
    ●	Portal Fazenda.gov<br>
    ●	Apple Books<br>
   </td>
   <td>
    ●	Buscar um físico mais equilibrado e melhorar seu visual.<br>
    ●	Ter uma imagem mais respeitada em seu círculo social.
   </td>
   <td>
    ●	Ser muito magro e se incomodar com sua aparência.<br>
    ●	Não gosta do estilo de vida fitness a ponto de procurar um personal ou profissional da área.
   </td>
   <td>
    ●	Resolver todos os casos que chegam em suas mãos com excelência.<br>
    ●	Profissional dedicado e obcecado por resultados.
   </td>
  </tr>
 </table>

  <table>
  <tr>
   <td width="1000" colspan="5" align="center">Patrícia Sampaio, 32 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="https://user-images.githubusercontent.com/102563767/234726262-b6388966-df50-48b9-aa44-c8a72ccf566a.png"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Professora de ensino médio.</td>
   <tr>
    <td width="150" align="center">Aplicativos</td>
    <td width="210" align="center">Motivações</td>
    <td width="210" align="center">Frustrações</td>
    <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ●	Facebook<br>
    ●	Instagram<br>
    ●	WhatsApp<br>
    ●	Bancos Digitais<br>
    ●	Uber
   </td>
   <td>
    ●	Busca uma vida mais saudável por orientações médicas.<br>
    ●	Ter uma postura corrigida e alívio de dores causadas pelo trabalho. 
   </td>
   <td>
    ●	Não ter empenho em começar algo sozinha.<br>
    ●	Sente dores e complicações que não são normais de sua idade.<br>
   </td>
   <td>
    ●	Viajar com a família.<br>
    ●	Se dedicar aos seus alunos.<br>
    ● Cuidar do seu Pet.
   </td>
  </tr>
 </table>
 
   <table>
  <tr>
   <td width="1000" colspan="5" align="center">Marcos Alberto, 50 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="https://user-images.githubusercontent.com/102563767/234726463-f9638371-db6e-49d0-8e5c-69f9cc8f28b2.jpeg"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Ator/Dublê.</td>
   <tr>
    <td width="150" align="center">Aplicativos</td>
    <td width="210" align="center">Motivações</td>
    <td width="210" align="center">Frustrações</td>
    <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ●	Facebook<br>
    ●	Instagram<br>
    ●	Twitter<br>
    ●	TikTok<br>
    ●	Youtube<br>
   </td>
   <td>
    ●	Ter um físico atlético que suporte o dia a dia de sua profissão.<br>
    ●	Envelhecer com qualidade.<br>
    ●	Aproveitar a vida da melhor maneira possível.
   </td>
   <td>
    ●	Dificuldade em organização pessoal e profissional.<br>
    ●	Ter uma rotina mais constate em seus treinos.
   </td>
   <td>
    ●	Praticar esportes radicais.<br>
    ●	Praticar exercícios físicos.<br>
    ●	Praticar meditação.
   </td>
  </tr>
 </table>

<table>
  <tr>
   <td width="1000" colspan="5" align="center">Kleber Rocha, 38 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="https://user-images.githubusercontent.com/102563767/234726612-26828c2d-2dfa-42ac-b4bb-0ec95b9e8805.jpg"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Gerente Comercial.</td>
   <tr>
    <td width="150" align="center">Aplicativos</td>
    <td width="210" align="center">Motivações</td>
    <td width="210" align="center">Frustrações</td>
    <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ●	Linkedin<br>
    ●	YouTube<br>
    ●	Mercado Livre<br>
    ●	G1<br>
    ●	QuatroRodas<br>
    ●	Ifood
   </td>
   <td>
    ●	Perder peso.<br>
    ●	Ter qualidade de vida.<br>
    ●	Passar uma imagem mais profissional e séria.  
   </td>
   <td>
    ●	Não gostar de academias.<br>
    ●	Não encontrar um método fácil e rápido para ter em qualquer lugar como realizar uma breve rotina de exercícios.
   </td>
   <td>
    ●	Estudar.<br>
    ●	Passar tempo em família.<br>
    ●Conhecer Restaurantes e polos gastronômicos.
   </td>
  </tr>
 </table>

 <table>
  <tr>
   <td width="1000" colspan="5" align="center">Jéssica Lima, 30 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="https://user-images.githubusercontent.com/102563767/234726844-0e2b3e64-2862-4351-8fb8-38512b44368d.jpg"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Personal/Professora de dança.</td>
   <tr>
    <td width="150" align="center">Aplicativos</td>
    <td width="210" align="center">Motivações</td>
    <td width="210" align="center">Frustrações</td>
    <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ●	Youtube<br>
    ●	Instagram<br>
    ●	Linkedin<br>
    ●	Netflix<br>
    ●	Prime Vídeo
   </td>
   <td>
    ●	Cuidar do seu corpo.<br>
    ●	Melhorar a qualidade de vida das pessoas.
   </td>
   <td>
    ●	Não possuir um sistema que facilite o acesso de seus alunos a rotinas de exercícios.<br>
    ●	Perder muito tempo fazendo treinos manuscritos e sem automação.
   </td>
   <td>
    ●	Dançar.<br>
    ●	Cuidar das suas redes sociais.<br>
    ● Estudar práticas de sempre melhorar o resultado de seus alunos.
   </td>
  </tr>
 </table>



## Histórias de Usuários

A fim de buscar mais informações sobre os motivos e causas de uso dessas pessoas a plataforma a ser desenvolvida, foram realizadas perguntas por meio de entrevistas, tendo resultados demonstrados no quadro apresentado:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Júlia Coimbra | Ter uma rotina mais saudável  | Ter uma gravidez sem riscos. |
|Júlia Coimbra | Estabelecer um físico forte. | Ter uma boa recuperação pós-parto. |
|Pedro Henrique  | Ter um físico trabalhado. | Ter uma imagem mais imponente. |
|Pedro Henrique  | Conquistar seu objetivo físico de forma rápida e acessível. | Não atrapalhar a rotina. |
|Patrícia Sampaio | Buscar um corpo equilibrado e saudável. | Não conviver com dores e desconfortos. |
|Patrícia Sampaio | Praticar exercícios físicos. | Atingir qualidade de vida. |
|Marcos Alberto | Manter um corpo atlético. | Trabalhar em alto nível. |
|Marcos Alberto | Estar em forma. | Envelhecer com qualidade. |
|Kleber Rocha | Começar a praticar exercícios. | Perder peso. |
|Kleber Rocha | Melhorar sua imagem. | Organizar sua vida pessoal e profissional. |
|Jéssica Lima  | Organizar toda sua carteira de alunos. | Ter mais sucesso profissional. |
|Jéssica Lima  | Organizar sua rotina. | Conseguir atender melhor seus alunos.|

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](https://user-images.githubusercontent.com/102563767/234877730-5320cc7e-c790-42b6-8737-eb8ac62f4f3a.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
