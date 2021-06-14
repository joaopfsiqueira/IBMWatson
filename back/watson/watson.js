const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: 'MlpFo-yxqsbqZoMFcLgRkJft-S5kie0-O7MNyTNcd60S',
  }),
  url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/c61a3800-c0b5-42f4-a918-f51de2b2ece0',
});

  module.exports = textToSpeech;