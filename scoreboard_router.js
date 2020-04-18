const Player = require('./Player')
const router = require('express').Router()
const uniqid = require('uniqid')



  

router.get('/', (req,res) => {
    
    Player.find({}).then(per => {
        res.json(per.map(p => p.toJSON()))
        console.log('asd')
        
    })
    .catch((err) => console.log(err))

}
)

router.post('/', (req,res) => {
    const body = req.body
    try {
        const player = new Player({name:body.name, score:body.score, id:uniqid()})
        player.save().then(p => {
            console.log()
            res.json(p.toJSON)
        }
        )
        
    } catch (error) {
        console.log(error)   
    }
})

router.put('/:id', (req,res) => {
    const body = req.body
    Player.findByIdAndUpdate(req.params.id, {$set:{score : body.score}}, {new : true}).then(r => {
        return res.json
      })

})


module.exports = router
