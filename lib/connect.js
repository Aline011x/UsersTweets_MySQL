const dotenv = require('dotenv');
dotenv.config()
const mysql = require('mysql2')

// const connect = mysql.createConnection(process.env.DATABASE_URL)
const connect = mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD, 
database: process.env.DB_DATABASE
})

// connect.connect((err) => {
//     if (err) {
//         console.error('Error connecting to database: ', err)
//     } else {
//         console.log('Connected to database successfully!')
//     }})

console.log('Connected to dataase')
module.exports = connect; 