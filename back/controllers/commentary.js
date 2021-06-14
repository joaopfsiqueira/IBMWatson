const fs = require('fs');
const textToSpeech = require('../watson/watson');
const db = require('../server/db')

module.exports = {
    
    async create(request, response) {
        try {
            const comment = request.body.Comentario
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
            return response.send(Comentarios);
        } catch (err) {
            return response.send({error: err.message})
        }
    },
}