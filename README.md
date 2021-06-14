Para que o programa funcione serão necessarias as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySql2](https://github.com/sidorares/node-mysql2),[IBMWATSON](https://github.com/watson-developer-cloud/node-sdk), [VSCode](https://code.visualstudio.com/) .

## Iniciando o projeto
```bash
# Clone este repositório
$ git clone https://github.com/joaopfsiqueira/ibmWatson/

# Acesse a pasta do projeto no terminal/cmd
$ cd ibmWatson

# Após estar na pasta instale todas as dependências 
$ npm install

# Cria todas as tabelas do banco de dados
$ npx typeorm migration:run

# Inicie o server no backend
$ npm run server

# Abra o html "Home" dentro da pasta index

```


##  Tecnologias


- [Typeorm](https://www.npmjs.com/package/typeorm)