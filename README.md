Para que o programa funcione serão necessarias as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySql2](https://github.com/sidorares/node-mysql2),[IBMWATSON](https://github.com/watson-developer-cloud/node-sdk), [VSCode](https://code.visualstudio.com/),
[DOTENV](https://github.com/motdotla/dotenv),[SEQUELIZE](https://github.com/sequelize/sequelize/) .

## Iniciando o projeto
```bash
# Clone este repositório
$ git clone https://github.com/joaopfsiqueira/IBMWatson/

# Acesse a pasta do projeto no terminal/cmd

# Após estar na pasta instale todas as dependências 
$ npm install

Falando sobre as Credenciais da IBM (URL e KEY)
#existe um arquivo .env na pasta inicial, onde se encontra as variáveis da IBM e do BD, basta substituir com os seus dados! E todas essas informações vão para /back/src/database/config.js->>

Falando sobre o MYSQL e suas configurações:
# É NECESSÁRIO TER O MYSQL INSTALADO NA MÁQUINA, qualquer configuração e senha!

Passo a Passo para o MYsql:
# 1 - Instalar o Mysql server.
# 2 - pegar as credências como: username, host, port, e password.
# 3 - Alterar dentro de .env
# 4 - Abrir new terminal no vscocde e executar "npm run migrations" (VAI FAZER O CREATE DO DATABASE E DAS TABLES AUTOMATICAMENTE.)
$npm run migrations

# e pronto! Configurado :D

# Inicie o server no backend
$ npm run server

# Abra o html "Home" dentro da pasta index

#Divirta-se!

Algumas observações:
#O createDB.js dentro de /back/src/database/createDB.js contem o script que está no package.json (createDataBase).
#Agradeço à segunda chance! 


```

