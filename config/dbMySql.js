const Sequelize = require ('sequelize')

const DATABASE = 'pejuang_desa'
const USERNAME = 'root'
const PASSWORD = ''

const sequelize = new Sequelize (DATABASE, USERNAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
})

sequelize
    .authenticate()
    .then(() => {
        console.log ('connection has been made.')
    })
    .catch(err => console.error(err))

module.exports = sequelize


