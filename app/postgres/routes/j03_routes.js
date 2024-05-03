const { Router } = require('express')
const controller = require('../controller/j03_controller')

const router = Router()

router.get('/', controller.getJ03)
router.post("/", controller.addJ03)
router.get('/:id', controller.getJ03ById)
router.put('/:id', controller.updateJ03)
router.delete('/:id', controller.removeJ03)

module.exports = router;