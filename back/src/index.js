const express = require('express');
const app = express();
const port = 3000 | process.env.PORT;
// const db = require('./database/db');
const bodyParser = require('body-parser');
const cors = require('cors')
// const controller = require('../controllers/commentary')

const routerComment = require('./routes/comment.routes');
const audiosRouter = require('./routes/audio.routes')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routerComment);
app.use('/audios', audiosRouter);

//CRIANDO ROTA PARA PEGAR OS AUDIOS NO HTML exemplo: http://localhost:3000/audios/41audio.mp3
app.use(express.static('../audios'))


app.listen(port, () => {
  console.log('Servidor web em execução: http://localhost:3000');
});