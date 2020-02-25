const router = require('express').Router()
const candidatesController = require('../controllers/candidates')

router.route('/candidates/:id').get(candidatesController.show)
router.route('/candidates').get(candidatesController.index).post(candidatesController.create)

module.exports = router
