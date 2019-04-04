const express   = require('express')
const router    = express.Router();

router.get('/', function(req, res) {
    res.send({ message: 'index route elements'})
})

const elementsController = require('../controllers/elements-controller')

router.get('/elements', elementsController.allElements)
router.post('/elements/seed', elementsController.seedDBElements)

router.get('/elements/:id', elementsController.getByIdElement)
router.post('/elements', elementsController.createElement)

router.delete('/elements/:id', elementsController.deleteElement)
router.put('/elements/:id', elementsController.updateElement)

module.exports = router