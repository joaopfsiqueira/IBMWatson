(async () => {
    const db = require('./db');
    await db.insertComment({Comentario: "O rato roeu a rica roupa do rei de Roma!" });
    const Comentarios = await db.selectComments();
    console.log(Comentarios)
    
})();

