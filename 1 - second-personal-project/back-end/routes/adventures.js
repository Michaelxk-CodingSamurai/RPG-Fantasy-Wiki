const express       = require('express')
const router        = express.Router()

router.get('/', function(req, res) {
    res.send({ message: 'index route elements'})
})

const adventuresController = require('../controllers/adventures-controller.js')

router.get('/adventures', adventuresController.allAdventures)
router.post('/adventures/seed', adventuresController.seedDBAdventures)

router.get('/adventures/:id', adventuresController.getByIdAdventure)
router.post('/adventures', adventuresController.createAdventure)

router.delete('/adventures/:id', adventuresController.deleteAdventure)
router.put('/adventures/:id', adventuresController.updateAdventure)

module.exports = router