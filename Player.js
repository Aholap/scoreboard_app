
const mongo = require('mongoose')

const PlayerSchema = new mongo.Schema({
    name: {type: String, required: true, minlength: 2, unique:true},
    score: {type: Number, required: true, minlength: 1},
    id:{type: String, required:true}

})
PlayerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      //console.log(returnedObject.id)
      //console.log(document)
      delete document._id
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
const Player = mongo.model('Player', PlayerSchema)

module.exports = Player











