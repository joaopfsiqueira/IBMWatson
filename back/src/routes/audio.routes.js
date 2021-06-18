const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/:file',(request, response) => {
    return response.sendFile(path.resolve('./back', 'audios', request.params.file));
    //CONCATENA ..
  })

  module.exports = router;