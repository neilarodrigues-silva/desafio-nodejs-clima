# ☀️☁️ API CLIMA <h1>
<img src="https://github.com/neilarodrigues-silva/neilarodrigues-silva/blob/main/gifs-de-clima-14.gif?raw=true" alt="drawing" height="300"/>

### Projeto Concluído✅🚀

<p align="center">
 <a href="#-descrição-do-projeto">Descrição do Projeto </a> •
<a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-endpoints">Endpoints</a> •
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-desenvolvedores">Desenvolvedores</a>

## 💻 Descrição do Projeto

Projeto realizado para atingir as metas propostas no Desafio Nodejs, o mesmo foi desenvolvido durante o **Programa Starter**  oferecido pela **[GFT]**.

A API Clima tem como finalidade, o acesso a previsão do tempo da cidade selecionada pelo o usúario com opções de acesso Free e Premium.

🔹 A API é composta por:

* [X] Aplicações Nodejs que se comuniquem:

* **Api Crud**
* **Api Principal**

- [X] 2 tipos de Usuários:

* **Admin**
* **Usuário Free/Premium**

* [X] Tipos de restrição de acesso entre os usuários

- O e-mail deve ser único.
- Só tem opção de salvar favoritos os usuários Premium.
- Usuário Premium possui acesso a mais informaçãoes que o usuário Free.
- Somente o usuário Admin pode cadastrar outro Admin.

* [X] CRUDs

* **Crud Admin**
* **Crud Usuário**
* **Crud Favoritos**

* [X] API Externa:

[Weather API ](https://www.weatherapi.com/about.aspx)

WeatherAPI.com fornece dados meteorológicos atuais e de 14 dias, clima futuro, clima histórico e dados geográficos por meio de. API REST no formato JSON.

A [API](https://www.weatherapi.com/api.aspx) também fornecerá informações de fuso horário, dados de astronomia e dados de localização geográfica.

Os dados meteorológicos são fornecidos em parceria com diversos provedores de dados, agências governamentais e meteorológicas.

* [X] Faça uso de ao menos 6 verbos HTTP:

* **Post**
* **Get**
* **Put**
* **Patch**
* **Delete**
* **Options**

* [X] Possa retornar ao menos 6 Status diferentes:

**200 Ok**

**201 Created**

**401 Unauthorized:**

**403 Forbidden**

**500 Internal Server Error**

**404 Not Found**

**501 Not Implemented**

* [X] Swagger, OpenAPI ou Projeto no Postman

* **Postman**


* [X] Uso de variáveis de ambiente para chaves de API, senhas pessoais, usuário e senha de conexão de banco de dados relacionais

* **As portas e chaves da API.**

* [X] Popular banco

[Seeding com TypeORM ](https://dev.to/franciscomendes10866/how-to-seed-database-using-typeorm-seeding-4kd5)

* [X] Uso livre em questões de banco de dados, desde que seja grátis

* **MySQL**

* [X] Uso livre em questões de ORM/ODM e afins

* **TypeORM**

## ⚙️Funcionalidades

- [X] Os usuários  poderão se cadastrar na aplicação web enviando:

  - [X] Nome, e-mail, cidade, estado e senha de acesso.
  - [X] Usuários Free - terão acesso as informações básicas do aplicação.
  - [X] Usuário Premium - terão acesso as informações básicas e poderam salvar suas cidades favoritas.
- [X] Os usuários Administradores terão:

  - [X] Acesso ao cadastro completo, adição e exclusão de usuários Admin.
  - [X] Adicionar Premium para usuários de acesso Free.

## 📍Endpoints

🔹API CRUD - User

| Método    | Endpoint                          | Descrição                                           |
| ---------- | --------------------------------- | ----------------------------------------------------- |
| `GET`   | http://localhost:5000/users/  | Listar todos os usuários        |
| `GET`   | http://localhost:5000/users/{IdUsuario}    | Trazer um usuário específico       |
| `POST`   | http://localhost:5000/users/    | Cadastrar um usuário    |
| `PUT`   | http://localhost:5000/users/{IdUsuario}    | Atualizar um usuário        |
| `Delete`    | http://localhost:5000/users/{IdFavorite} | Deletar um usuário   |
| `PATCH` | http://localhost:5000/users/premium/[id do user] | Tornar um Usuário premium.                                                                                                                                                                                  |
| `PATCH` | http://localhost:5000/users/free/[id do user]    | Tornar um Usuário free.                                                                                                                                                                                      |

🔹API CRUD - Admin

| Método    | Endpoint                          | Descrição                                           |
| ---------- | --------------------------------- | ----------------------------------------------------- |
| `GET`   | http://localhost:5000/admin/  | Listar todos os admin        |
| `GET`   | http://localhost:5000/admin/{IdUsuario}    | Trazer um admin específico       |
| `POST`   | http://localhost:5000/admin/    | Cadastrar um usuário    |
| `PUT`   | http://localhost:5000/admin/{IdUsuario}    | Atualizar um admin        |
| `Delete`    | http://localhost:5000/admin/{IdFavorite} | Deletar um admin   |

🔹API CRUD - Favoritos

| Método    | Endpoint                          | Descrição                                           |
| ---------- | --------------------------------- | ----------------------------------------------------- |
| `POST`   | http://localhost:5000/users/{IdUsuario}/favorites    | Utilizado para criar uma nova cidade favorita.        |
| `Delete`    | http://localhost:5000/users/favorites/{IdFavorite} | Atualiza dados da cidade ou altera sua situação.   |

* 🔹API PRINCIPAL

| Método   | Endpoint                                         | Descrição                                                                                                                                                                                                   |
| --------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`   | http://localhost:5000/weather/city/{nome da cidade}     | Trazer o clima de uma cidade específica.( Se a cidade tiver<br />nome composto passar com espaço ou separado por "+", <br />por  exemplo: ***rio de janeiro*** ou ***rio+de+janeiro***. |
| `GET`   | http://localhost:5000/weather/{id do user}      | Traz o clima da cidade do usuário.                                                                                                                                                                           |
| `POST`  | http://localhost:5000/auth/login                 | Fazer o login.                                                                                                                                                                                                |

## 🛠 Tecnologias

**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

- **[NestJS](https://nestjs.com/)**
- **[TypeORM](https://typeorm.io/)**
- **[MySQL](https://www.mysql.com/)**

**🔹API CRUD - Dependências**

<img src="https://github.com/neilarodrigues-silva/neilarodrigues-silva/blob/main/dep-api-crud.PNG?raw=true" alt="drawing" height="350"/>
<br />
<img src="https://github.com/neilarodrigues-silva/neilarodrigues-silva/blob/main/dep-desenv-api-principal.PNG?raw=true" alt="drawing" width="350"/>

Veja o arquivo  [package.json](https://git.gft.com/naal/desafio-nodejs-clima/-/blob/main/ApiCrud/package.json)

🔹**API PRINCIPAL- Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

<img src="https://github.com/neilarodrigues-silva/neilarodrigues-silva/blob/main/dep.api-principal.PNG?raw=true" alt="drawing" height="350"/>
<br />
<img src="https://github.com/neilarodrigues-silva/neilarodrigues-silva/blob/main/dep-desenv-api-principal.PNG?raw=true" alt="drawing" width="350"/>

Veja o arquivo  [package.json](https://git.gft.com/naal/desafio-nodejs-clima/-/blob/main/ApiPrincipal/package.json)

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Postaman](https://www.postman.com/), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório

$ git clone https://git.gft.com/naal/desafio-nodejs-clima

# Acesse a pasta do projeto no terminal/cmd

$ cd desafio-nodejs-clima

# Vá para a pasta da api(Api Crud ou Api Principal)

$ cd .\ApiCrud\

# Instale as dependências

$ npm i 

# Execute a aplicação em modo de desenvolvimento

$ npm run dev:server

# O servidor inciará na porta:3000 e 5000. 
# Acesse http://localhost:3000 (API CRUD)  
# Acesse http://localhost:5000 (API PRINCIPAL)

```

## 👨👩  Desenvolvedores

<br />
<img src="https://github.com/neilarodrigues-silva/neilarodrigues-silva/blob/main/WhatsApp%20Image%202023-01-03%20at%2021.46.09.jpeg?raw=true" alt="drawing" height="100"/><br />
Cleberson Stolz<br />
Estagiário 

<br />
<a href="https://git.gft.com/cntz" target="_blank"><img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" target="_blank"></a>
<a href="https://github.com/Cleberstolz/Cleberstolz" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a><a href="mailto:eu.clebersonstolz@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
   <a href="https://www.linkedin.com/in/cleberson-stolz-8908701b3/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

<br />
<img src="https://github.com/neilarodrigues-silva/neilarodrigues-silva/blob/main/WhatsApp%20Image%202023-01-05%20at%2014.14.21.jpeg?raw=true" alt="drawing" width="100"/>
<br />
Neila Rodrigues da Silva <br />  
Estágiaria
<br />
<a href="https://git.gft.com/naal" target="_blank"><img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" target="_blank"></a>
<a href="https://github.com/neilarodrigues-silva" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
<a href="mailto:neilars.rodrigues1@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/neila-rodrigues-da-silva-839882a9" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
