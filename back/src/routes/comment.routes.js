'use strict';

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment-controller');

router.get('/', commentController.getComments); //select
router.post('/', commentController.postComments); //insert


module.exports = router;