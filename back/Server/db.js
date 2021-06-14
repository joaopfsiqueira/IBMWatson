//função assíncrona de conexão
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection; 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:joao753951@localhost:3306/wtsdb") //conexão com o bd
    global.connection = connection;
    return connection;
}

//retornar alguns dados que já existem no branco de dados.
async function selectComments(){
    const conn = await connect();
    const [rows] = await conn.query('Select * from tblcomentarios')
    return await rows;
}


async function insertComment(comment){
    const conn = await connect();
    //TRATANDO SQL INJECTION, AO INVÉS DE CONCATENAR STRING, EVITANDO ATAQUES.
    const sql = 'INSERT INTO tblcomentarios(Comentario) VALUES (?);'; //cada ? é referente ao array de valores
    const values = [comment.Comentario]; //COLUNAS DO BANCO DE DADOS.
    await conn.query(sql, values);
}


async function lastComment(){
    const conn = await connect();
    const [row] = await conn.query('SELECT * FROM tblcomentarios where idComentario ORDER BY idComentario DESC limit 1')
    return await row[0];
}
module.exports = {selectComments, insertComment, lastComment}