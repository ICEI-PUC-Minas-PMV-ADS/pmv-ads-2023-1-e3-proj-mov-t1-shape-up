# Plano de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.
 
| **Caso de Teste** 	| **CT-01 – Acesso a página "Home e cadastro"** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001	Permitir que o usuário crie uma conta no aplicativo. |
| Objetivo do Teste 	| Acessar a página "Home" e utilizar sua funcionalidade de "cadastro" |
| Passos 	| - Acessar o sistema <br> - Automaticamente entrar na pagina de cadastro<br> - Clicar em "Cadastre-se" <br> - Preencher os campos obrigatórios <br> - Clicar em "Cadastrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso, o login deve ser feito automaticamente e o úsuario deve ser redirecionado para a página "Home". |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login**	|
|Requisito Associado | RF-001	Permitir que o usuário crie uma conta no aplicativo.|
| Objetivo do Teste 	| Verificar se o usuário é capaz de realizar login. |
| Passos 	| - Acessar o sistema <br> - Clicar no botão de Login <br> - Preencher o campo de usuario <br> - Preencher o campo da senha <br> - <br> - Clicar em "Login" |
|Critério de Êxito | - O login foi realizado com sucesso e o úsuario deve ser redirecionado para a página "Home". |
|  	|  	|
 | **Caso de Teste** 	| **CT-03 – Visualizar treinos cadastrados**	|
|Requisito Associado | RF-008	Permitir que o usuário visualize os treinos cadastrados. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar os treinos cadastrados na aplicação. |
| Passos 	| - Fazer o login <br> Ser redirecionado para página Home <br> Conferir se os treinos cadastrados estão ali <br>
|Critério de Êxito | - Os treinos estão na aplicação. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 –Acessar Página de informações individuais de cada treino**	|
|Requisito Associado | RF-002 Efetuar Login/RF-003 Permitir que o usuário navegue pela aplicação/RF-008	Vizualizar Treinos Cadastrados . |
| Objetivo do Teste 	| Verificar se o usuário consegue acessar a página subsequente da home com as informações do treino escolhido pelo usuário |
| Passos 	| - Fazer o login <br> - Acessar a página Home <br> - Selecionar o Treino desejado <br> - Ser redirecionado á pagina do treino selecionado <br> - Conferir as informações em questão. |
|Critério de Êxito | - Página acessada com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Acessar página de informações individuais de exercícios**	|
|Requisito Associado | RF-002 Efetuar Login/ RF-003 Permitir que o usuário navegue pela aplicação/RF-008	Vizualizar Treinos Cadastrados/Rf-004. |
| Objetivo do Teste 	| Verificar se o usuário consegue acessar a página correta com as informações coerentes ao exercício escolhido. |
| Passos 	| - Fazer o login <br> -Abrir a página de treinso <br> - Selecionar compartilhar exercícios <br> - Selecionar os exercícios que deseja que sejam compartilhadas. <br> - Clicar em compartilhar exercício.|
|Critério de Êxito | - Exercício compartilhado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Informar o tempo de descanso do exercício por meio de um cronômetro interativo*	|
|Requisito Associado | RF-006	Permitir que o usuário disponha de um cronômentro de descanso entre séries do exercício |
| Objetivo do Teste 	| Verificar se o cronômetro de descanso entre séries e exercícios funciona corretamente. |
| Passos 	| - Acessar o sistema <br> - acessar o exercício do treino a ser realizado <br> - clicar em começar exercicio <br> - verificar se o cronômetro de descanso aparece e se suas funcionalidades estão corretas. |
|Critério de Êxito | - Cronômetro funcionando com exito. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Exibir informações do usuário.**	|
|Requisito Associado | RF-005	Permitir que o usuario vizualize suas informações de perfil como nome e foto cadastradas em seu perfil. |
| Objetivo do Teste 	| Avaliar se as informações exibidas no Header de informações do usúario estão corretamente renderizadas e atualizadas. |
| Passos 	| - Acessar o sistema <br> - Efetuar Login <br> - Ser Redirecionado a página Home <br> - verificar se as informações disponibilizadas estão corretas <br> |
|Critério de Êxito | - Informações exibidas com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Controles de navegação**	|
|Requisito Associado | RF-003 Permitir que o usuário navegue pela aplicação/ RF-004	Permitir que o usuário visualize os treinos cadastrados. |
| Objetivo do Teste 	| Verificar se o usuário consegue utilizar os controles de navegação (Páginas e Logout da aplicação) com êxito. |
| Passos 	| - Fazer o login <br> Ser redirecionado para página Home <br> Utilizar cada um dos botões de controle <br>
|Critério de Êxito | - Controles funcionam com êxito. |
|  	|  	|
 | **Caso de Teste** 	| **CT-09 – Visualizar vídeos dos exercícios cadastrados**	|
|Requisito Associado | RF-010	Permitir que o usuário vizualize os videos dos exercicios cadastrados nos treinos. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar os videos dos exercicios cadastrados nos treinos. |
| Passos 	| - Fazer o login <br> Clicar em treinos <br> Clicar no exercício <br> Visualizar o vídeo <br>
|Critério de Êxito | - Os Vídeos dos exercícios são demonstrados com exito. |
|  	|  	|
