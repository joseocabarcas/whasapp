/**
* Chat.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name:{
  		type:'string'
  	},
  	picture:{
  		type:'string'
  	},
  	lastMessage:{
  		type:'text'
  	},
  	message: {
      collection: 'message',
      via: 'chatId'
    }
  }
};

