# Registro de Testes de Software

O registro de testes de software é uma prática essencial no desenvolvimento de sistemas, visando documentar e rastrear todas as atividades relacionadas aos testes realizados. Por meio desse registro, é possível registrar detalhes sobre os casos de teste, os resultados obtidos, as falhas identificadas e as ações corretivas tomadas. 

Relatório com as evidências dos testes de software realizados no sistema pela equipe nos requisito que já possuem funcionalidade e que tornaram possíveis os testes , para ter uma visão geral dos testes que serão executados veja: **[Plano de Teste de Software](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/blob/main/docs/08-Plano%20de%20Testes%20de%20Software.md)**.

## CT-01 – Acesso a página "Home e cadastro".

Objetivo principal deste teste é: Permitir que o usuário crie uma conta no aplicativo.

<table>
  <tr>
    <td width='330'>Cadastro passo 1</td>
    <td width='330'>Cadastro passo 2</td>
    <td width='330'>Cadastro passo 3</td>
  </tr>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/102563767/236706374-14f76b18-490d-4db8-aa03-3532f99fd8d4.png'/></td>
    <td><img src='https://user-images.githubusercontent.com/102563767/236706381-53a67973-b4cd-4140-aad8-c7a3eb666ce8.png'/></td>
    <td><img src='https://user-images.githubusercontent.com/102563767/236706387-daf0bcc2-da31-47c0-9a9a-db94635a0ddb.png'/></td>
  </tr>
  <tr>
    <td width='330'>Cadastro passo 4</td>
    <td width='330'>Cadastro passo 5</td>
    <td width='330'>Página Home</td>
  </tr>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/102563767/236706391-eff6ef4e-9440-4272-8e54-e6f32ccf56b4.png'/></td>
    <td><img src='https://user-images.githubusercontent.com/102563767/236706395-7e451790-89d7-400e-ba4f-3772cf36c8be.png'/></td>
    <td><img src='https://user-images.githubusercontent.com/102563767/236699882-9fe2ad5f-addf-4956-b740-2d77bae8cd31.png'/></td>
  </tr>
 </table>
 
### Critério de Exito: Sucesso
Usuário foi capaz de cadastrar uma conta no aplicativo e foi redirecionado para Home-Page.

### fluxo Alternativo
Esse caso de teste não possui fluxo alternativo.

## CT-02 – Efetuar login.
Objetivo principal deste teste é: Verificar se o usuário é capaz de realizar login.

<table>
  <tr>
    <td width='330'>Login</td>
    <td width='330'>Página Home</td>
  </tr>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/102563767/236706687-1ac62107-e8d6-48f1-8996-90e46c11d698.jpg'/></td>
    <td><img src='https://user-images.githubusercontent.com/102563767/236699882-9fe2ad5f-addf-4956-b740-2d77bae8cd31.png'/></td>
  </tr>
</table>

### Critério de Exito: Sucesso
O login foi realizado com sucesso e o úsuario deve ser redirecionado para a página de Exito.

### Fluxo Alternativo
O usuário digitar email ou senha incorretos.

## CT-03 – Visualizar treinos cadastrados.

Objetivo principal deste teste é verificar se o usuário consegue visualizar os treinos cadastrados na aplicação.

<table>
  <tr>
    <td width='330'>Página Home</td>
  </tr>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/102563767/236699882-9fe2ad5f-addf-4956-b740-2d77bae8cd31.png'/></td>
  </tr>
</table>

### Critério de Exito: Sucesso

Usuário foi capaz de visualizar os treinos cadastrados em seu perfil.

### Fluxo Alternativo
Esse caso de teste não possui fluxo alternativo.

## CT-07 – Exibir informações do usuário.
Objetivo principal deste teste é: Avaliar se as informações exibidas no Header de informações do usúario estão corretamente renderizadas e atualizadas.

<table>
  <tr>
    <td width='330'>Página Home</td>
  </tr
    <tr>
    <td><img src='https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/102563767/e576adbd-fb35-4260-a0a8-e9a31a9fafd2'></td>
  </tr>
</table>

### Critério de Exito: Sucesso
Informações exibidas com sucesso.

### Fluxo Alternativo
Esse caso de teste não possui fluxo alternativo.

## CT-08 – Controles de navegação.
Objetivo principal deste teste é: Verificar se o usuário consegue utilizar os controles de navegação (Páginas e Logout da aplicação) com êxito.

<table>
  <tr>
    <td width='330'>Página Home</td>
    <td width='330'>Página de Tutoriais de Exercícios</td>
  </tr>
  <tr>
    <td><img src='https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/102563767/e576adbd-fb35-4260-a0a8-e9a31a9fafd2'></td>
    <td><img src='https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/102563767/4f59a448-8365-49f0-8b79-8a0c6777808e'/></td>
  </tr>
</table>

### Critério de Exito: Sucesso
Controles funcionam com êxito.

### Fluxo Alternativo
Esse caso de teste não possui fluxo alternativo.

## CT-09 – Visualizar vídeos dos exercícios cadastrados.

Objetivo principal deste teste é: Verificar se o usuário consegue visualizar os videos dos exercicios cadastrados nos treinos.

<table>
  <tr>
    <td width='330'>Página de Tutoriais de Exercícios</td>
  </tr>
  <tr>
    <td><img src='https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-shape-up/assets/102563767/57957e03-9205-403a-8e52-848107f2cfef'/></td>
  </tr>
</table>

### Critério de Exito: Sucesso

Os Vídeos dos exercícios foram carregados com exito.

### Fluxo Alternativo
Esse caso de teste não possui fluxo alternativo.

## Avaliação

Os testes de software mostraram que os requisitos Acima Testados foram atendidos, funcionando como planejado. Para as próximas iterações, serão acrescentados os demais casos de testes dos demais requisitos já desenvolvidos e em processo de registro.
