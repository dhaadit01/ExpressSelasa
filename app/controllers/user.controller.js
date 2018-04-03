

const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')

module.exports.getEmployee = (req, res) =>
    Employee
        .find()
        .exec((err, result) => {
            console.log (err)
            console.log (result)

            //Filter respond dari server
            //error dari server
            if(err) {
                console.log (`Error finding Employee`)
                res
                    .status(500)
                    .json({ message: `Error finding Employee`})
            
            //Data tidak ditemukan
                }else if (result.length ==0)
                res 
                    .status(404)
                    .json({message: `Data not found`})
            
            //Data ditemukan
            else {
                console.log (`Found Employee: ${result.length}`)
                res
                    .status(200)
                    .json(result)
            }
        })

//Get Employee Data by ID
module.exports.getEmployeeByID = (req, res) => {
    const {id} = req.params
    return Employee
        .findById(id)
        .exec((err, result) => {
            console.log (err)
            console.log (result)

            //Filter respond dari server
            //error dari server
            if(err) {
                console.log (`Error finding Employee`)
                res
                    .status(500)
                    .json({ message: `Error finding Employee`})
            
            //Data tidak ditemukan
                }else if (result.length ==0)
                res 
                    .status(404)
                    .json({message: `Data not found`})
            
            //Data ditemukan
            else {
                console.log (`Found Employee with ID: ${result.length}`)
                res
                    .status(200)
                    .json(result)
            }
        })
    }

//Insert an Employee
module.exports.addOneEmployee = (req, res) => {
    const{title, name, address} =req.body
    console.log("POST new employee")

    Employee
    .create({
        title,
        name,
        address,
    }, (err, result) => {

        //Filter respon dari server
        //Error dari server
        if(err) {
            console.log (`Error creating Employee`)
            res
                .status(500)
                .json({ message: `Error creating Employee`})
        
         //Data ditemukan
        } else {
            console.log (`Employee created: ${result}`)
            res
                .status(201)
                .json({
                    message: 'Employee successfuly created.',
                    data: result,
                })
            }
        })
    }

    //update an employee
module.exports.updateOneEmployee = (req, res) => {
    const { id } = this.params
    const {title, name, address} = req.body

    return Employee
    .findById(id)
    .exec((err, employee) => {
        if (err) {
            console.log(`Error finding Employee with id: ${id}`)
        
        //kirim respond
        employee
            .status(500)
            .json(err)
        } else if (employee) {
            console.log ('Data Employee not found')
            res
                .status(404)
                .json({message: 'Data not found'})
        } else {

            if (title)
              employee.title = title
            
            if (name)
              employee.name = name

            if (address)
            employee.address = address
        
        //Save to Database
        employee
         .save((err, updatedEmployee) => {
             if (err)
             res 
                 .status(500)
                 .json(err)
             else  
              res  
                .status(201)
                .json(updatedEmployee)
         })
        }
    
    })
}

// module.exports.updatedOneEmployee = (req, res) =>
//  Employee
//     .findByIdandUpdate(

//         //ID
//         req.params.id,

//         //body data
//         {$set: { ...req.body}},

//         //callback
//         err => {
//             if (err)
//                 res
//                  .status(500)
//                  .json(err)
//             else
//                 res
//                 .status(204)
//                 .json()
//         }
//     )
    
module.exports.deleteUserbByID = (req, res) => {
    const {id} = req.params
    console.log(`DELETE User by ID: ${id}`)

    return employee
        .findByIdAndRemove (id)
        .exec((err,result) => {
            if(err)
                res
                  .status(500)
                  .json(err)
            else
               res
                .status(204)
                .json()
        })
}

module.exports.getUserByID = (request, respond) => 
    respond.send({
        id: request.params.id,
        name: request.params.name,
    })