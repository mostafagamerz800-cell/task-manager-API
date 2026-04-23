const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')  

// get all

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
            res.status(500).json({ message: err.message })
        }
 })

//getting one

router.get('/:id', async (req, res) => {
    res.send(req.params.id)
})

//creating one

router.post('/', async (req, res) => {
    const Subscriber = new Subscriber ({
        name: req.body.name,
        subscribedtochannel: req.body.subscribedtochannel
    })
    try {
        const newSubscriber = await Subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
    
})
//updating one

router.patch('/id', (req, res) => {
    
})

//deleting one

router.delete('/id', (req, res) => {
    
})



module.exports = router
