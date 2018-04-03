
const express = require ('express')
const router = express.Router()

//controller
const ctrlUser = require('../app/controllers/user.controller')

//routing
router
.get ('/', ctrlUser.getEmployee)

router
.route('/employee')
.get(ctrlUser.getEmployee)
.post(ctrlUser.addOneEmployee)

router
    .route('/employee/:id')
    .get(ctrlUser.getEmployeeByID)
    .put(ctrlUser.updateOneEmployee)
    .delete(ctrlUser.deleteUserbByID)


router
.get(':id/:name', ctrlUser.getUserByID)

module.exports = router