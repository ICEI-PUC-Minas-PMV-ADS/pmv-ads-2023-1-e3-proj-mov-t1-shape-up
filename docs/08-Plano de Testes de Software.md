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
| **Caso de Teste** 	| **CT-03 – Criação de Treinos**	|
|Requisito Associado | RF-002	Permitir que o usuário cadastre Treinos. |
| Objetivo do Teste 	| Verificar se o usuário consegue cadastrar seus Treinos na aplicação. |
| Passos 	| - Fazer o login <br> Clicar em Treinos <br> Clicar no botão de Criar novo treino <br> - Preencher os campos <br> - Clicar Cadastrar novo treino <br> |
|Critério de Êxito | - Treino criado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 –Cadastrar exercícios aos treinos já criados**	|
|Requisito Associado | RF-003	Permitir que o usuário cadastre exercícios nos treinos criados. |
| Objetivo do Teste 	| Verificar se o usuário consegue criar ou modificar exercícios em treinos já criados |
| Passos 	| - Fazer o login <br> - Clicar em Treinos <br> - Selecionar o Treino dísponível <br> - Clciar em novo exercício <br> - Clicar em cadastrar exercício. |
|Critério de Êxito | - Exercício cadastrado com sucesso |
|  	|  	|
| **Caso de Teste** 	| **CT-05 –Criar exercícios compartilhados entre Treinos**	|
|Requisito Associado | Permitir que o usuário crie exercícios compartilhadas entre treinos. |
| Objetivo do Teste 	| Verificar se o usuário consegue compartilhar exercícios criadod entre outros treinos. |
| Passos 	| - Fazer o login <br> -Abrir a página de treinso <br> - Selecionar compartilhar exercícios <br> - Selecionar os exercícios que deseja que sejam compartilhadas. <br> - Clicar em compartilhar exercício.|
|Critério de Êxito | - Exercício compartilhado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Informar o tempo de descanso do exercício por meio de um cronômetro interativo*	|
|Requisito Associado | RF-005	Permitir que o usuário disponha de um cronômentro de descanso entre séries do exercício |
| Objetivo do Teste 	| Verificar se o cronômetro de descanso entre séries e exercícios funciona corretamente. |
| Passos 	| - Acessar o sistema <br> - acessar o exercício do treino a ser realizado <br> - clicar em começar exercicio <br> - verificar se o cronômetro de descanso aparece e se suas funcionalidades estão corretas. |
|Critério de Êxito | - Cronômetro funcionando com exito. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Gerar relatórios de treinos concluídos.**	|
|Requisito Associado | RF-006	Gerar relatórios de treinos concluídos. |
| Objetivo do Teste 	| Verificar se o usuário consegue gerar relatórios que demonstrem os treinos que foram concluidos. |
| Passos 	| - Acessar o sistema <br> - Clicar em relatórios <br> - Clicar em gerar relatórios <br> - verificar relatório com treinos concluídos e pendentes <br> |
|Critério de Êxito | - Geração de relatório concluída com êxito. |
|  	|  	|
 | **Caso de Teste** 	| **CT-08 – Visualizar treinos cadastrados**	|
|Requisito Associado | RF-008	Permitir que o usuário visualize os treinos cadastrados. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar os treinos cadastrados na aplicação. |
| Passos 	| - Fazer o login <br> Clicar em treinos <br> Conferir se os treinos cadastrados estão ali <br>
|Critério de Êxito | - Os treinos estão na aplicação. |
|  	|  	|
 | **Caso de Teste** 	| **CT-09 – Visualizar vídeos dos exercícios cadastrados**	|
|Requisito Associado | RF-010	Permitir que o usuário vizualize os videos dos exercicios cadastrados nos treinos. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar os videos dos exercicios cadastrados nos treinos. |
| Passos 	| - Fazer o login <br> Clicar em treinos <br> Clicar no exercício <br> Visualizar o vídeo <br>
|Critério de Êxito | - Os Vídeos dos exercícios são demonstrados com exito. |
|  	|  	|
