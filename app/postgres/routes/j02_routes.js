const { Router } = require('express')
const controller = require('../controller/j02_controller')

const router = Router()

router.get('/', controller.getJ02)
router.post("/", controller.addJ02)
router.get('/:id', controller.getJ02ById)
router.put('/:id', controller.updateJ02)
router.delete('/:id', controller.removeJ02)

module.exports = router;