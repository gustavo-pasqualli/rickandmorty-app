# Rick And Morty - Api

Aplicação Angular para busca de personagens de Rick And Morty, exibindo informações e posibilitando favoritar personagens.  
Construída com **Angular 20**
.
## 🌐 URL do site (produção)

- **Site:** https://d1pjap3bo15q84.cloudfront.net  

## 🚀 Requisitos

Antes de começar, verifique se você possui instalado:

- **Node.js**: `>=20.x`  
- **NPM**: `>=10.x`
- **Angular CLI**: `^20.1.5`  

## 📦 Instalação do projeto

```bash
git clone https://github.com/gustavo-pasqualli/rickandmorty-app.git
cd rickandmorty-app
npm install
```

## 🖥️ Execução (dev)

```bash
ng serve
```
A aplicação ficará disponível em: http://localhost:4200

## 📜 Scripts disponíveis

- `npm start` → inicia o ambiente de desenvolvimento  
- `npm run build` → gera a build de produção  
- `npm run watch` → build contínua no modo desenvolvimento  
- `npm test` → roda os testes unitários  

## 🛠️ Tecnologias principais

- [Angular 20](https://angular.dev/)  
- [RxJS](https://rxjs.dev/)  
- [Angular Material](https://material.angular.dev)
- [Akita](https://opensource.salesforce.com/akita)
- [ngx-translate](https://github.com/ngx-translate/core)

## 🧩 Desafios encontrados

- **Primeira vez usando Akita:** Escolhi utilizar o Akita por ser uma biblioteca na qual eu nunca havia trabalhado, foi uma experiência bacana.  

## 🐳 Docker

Você pode executar a aplicação através do Docker utilizando os seguintes comandos:

```bash
docker build -t angular-docker .
docker run -p 4200:4200 angular-docker
```

A aplicação ficará disponível em: http://localhost:4200
