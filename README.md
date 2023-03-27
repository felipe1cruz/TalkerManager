## Talker Manager 

## Sobre
&nbsp;&nbsp; O Talker Manager é um projeto do curso de Desenvolvedor Web Full Stack da Trybe, aonde foi desenvolvido uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers)

## Desafios
&nbsp;&nbsp; Esse foi nosso primeiro contato com API e requisições, o desafio foi montar pela primeira as rotas passando por validações como: email válido, usuário com mínimo de caracteres, etc.
	
## Arquivos:
&nbsp;&nbsp; A Trybe desenvolveu a configuração inicial do projeto. Arquivos desenvolvidos por mim:
- tudo na pasta /src..

## Tecnologias:
Tecnologias aplicadas por mim nesse projeto:
- NodeJS;
- Express;
- MySQL;
- Docker;

## Como executar o projeto (com docker):
- Certifique-se de ter o docker instalado com as versões 1.29 ou superior;
- Clone o repositório;
- Suba os containers de banco de dados e Node com o comando `docker-compose up -d`;
- Acesse o container Node com o comando `docker exec -it talker_manager bash`; 
- Instale as dependências do projeto com o comando `npm install`;
- Sua aplicação está pronta para rodar! `npm start`; 

![Captura de tela de 2022-12-09 16-38-14](https://user-images.githubusercontent.com/96309898/206785215-83758830-bb2d-473c-a764-0ee5da717df8.png)
printscreen da rota GET /talker que retorna um status 200 e um JSON com todos os palestrantes


