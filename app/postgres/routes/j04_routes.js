const { Router } = require('express')
const controller = require('../controller/j04_controller')

const router = Router()

router.get('/', controller.getJ04)
router.post("/", controller.addJ04)
router.get('/:id', controller.getJ04ById)
router.put('/:id', controller.updateJ04)
router.delete('/:id', controller.removeJ04)

module.exports = router;