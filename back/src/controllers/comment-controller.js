const Sequelize = require('sequelize');
const db = require('../database/db.js');

exports.getComments = async (req,res) => {
    const Comentarios = await db.selectComments();
    return res.status(200).send(Comentarios);
}

exports.postComments = async (req,res) => {
  try {
    const comment = req.body.Comentario
    await db.insertComment({Comentario: comment});
    const rowComentario = await db.lastComment();
    const {Comentario: texto, idComentario} = rowComentario;
    

    const synthesizeParams = {
        text: texto,
        accept: 'audio/mpeg',
        voice: 'pt-BR_IsabelaVoice',
    };

    const audiosNovos = `${idComentario}audio.mp3`

    const audioResponse = (await textToSpeech.synthesize(synthesizeParams)).result;
    audioResponse.pipe(fs.createWriteStream(`back/audios/${audiosNovos}`))
    
    const Comentarios = await db.selectComments();
    return res.status(201).send(Comentarios);
} catch (err) {
    return res.status(400).send({error: err.message})
  }
}
