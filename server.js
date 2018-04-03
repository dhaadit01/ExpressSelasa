//Add database
require('./config/db')

//calling library
const express = require ('express')
const path = require ('path')
const bodyParser = require ('body-parser')

//we use express
const app = express()
const router = require('./config/routes')

//Define part to 3000 as example to run
app.set('port', 3000)

//Logger for every request
app.use((req, res, next)=>{
    console.log(req.method, req.url)
    next()
})

//Set static directory for Frontend
app.use(express.static(path.join(__dirname, 'public')))

//enable parsing posted forms
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Add some routing
app.use('/api', router)

const server = app.listen(app.get('port'), () => {
    const port = server.address ().port
    console.log ('Magic happen on port' + port)
})
