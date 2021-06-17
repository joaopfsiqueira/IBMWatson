Para que o programa funcione serão necessarias as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySql2](https://github.com/sidorares/node-mysql2),[IBMWATSON](https://github.com/watson-developer-cloud/node-sdk), [VSCode](https://code.visualstudio.com/) .

## Iniciando o projeto
```bash
# Clone este repositório
$ git clone https://github.com/joaopfsiqueira/IBMWatson/

# Acesse a pasta do projeto no terminal/cmd

# Após estar na pasta instale todas as dependências 
$ npm install

Falando sobre as Credenciais da IBM (URL e KEY)
#existe um arquivo .env na pasta inicial, onde existem duas variáveis. Bastando alterar pelas ->>
#credenciais de quem for usar que já irá substituir no código todo.

Falando sobre o MYSQL e suas configurações:
# É NECESSÁRIO TER O MYSQL INSTALADO NA MÁQUINA, qualquer configuração e senha! Necessário alterar no config.json.
#Dentro de config.json, é onde fica o json dos dados do banco de dados! Para não ter que criar um especifico 
# O banco e as tabelas são criadas sozinhas pelo db.js! Logo na primeira função initialize();
# Dentro de ./BACK/SERVER/DB.JS tem um código logo no inicio para criar o banco de dados e as tabelas ao executar o código abaixo.
# No entanto, caso queiram criar o bd manualmente, segue os scripts.

CREATE SCHEMA `wtsdb` ;
CREATE TABLE `wtsdb`.`tblcomentarios` (
  `idComentario` INT NOT NULL AUTO_INCREMENT,
  `Comentario` TEXT NOT NULL,
  PRIMARY KEY (`idComentario`));


# Inicie o server no backend
$ npm run server

# Abra o html "Home" dentro da pasta index

#Divirta-se!

```

