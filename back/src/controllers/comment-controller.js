const Sequelize = require('sequelize');
const { Comentario } = require('../models');
const fs = require('fs');
const textToSpeech = require('../../watson/watson');

exports.getComments = async (req,res) => {
    const selectComments= await Comentario.findAll();
    return res.status(200).send(selectComments);
}

exports.postComments = async (req,res) => {
  try {
    const newComment = await Comentario.create(req.body);
    
    console.log(newComment)

    const synthesizeParams = {
        text: req.body.Comentario,
        accept: 'audio/mpeg',
        voice: 'pt-BR_IsabelaVoice',
    };

    const audiosNovos = `${newComment.idComentario}audio.mp3`

    const audioResponse = (await textToSpeech.synthesize(synthesizeParams)).result;
    audioResponse.pipe(fs.createWriteStream(`back/audios/${audiosNovos}`))
    
    const Comentarios = await Comentario.findAll();
    return res.status(201).send(Comentarios);
} catch (err) {
    return res.status(400).send({error: err.message})
  }
}
