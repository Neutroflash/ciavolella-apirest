const { Router } = require('express')
const controller = require('../controller/controller')

const router = Router()

router.get('/', controller.getPostgres)
router.post("/", controller.addPostgres)
router.get('/:id', controller.getPostgresById)
router.put('/:id', controller.updatePostgres)
router.delete('/:id', controller.removePostgres)

module.exports = router;