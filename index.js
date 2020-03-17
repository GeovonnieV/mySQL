const mysql = require("mysql")
const inquirer = require("inquirer")
//making the connection
const connection = mysql.createConnection({

    host:"localhost",
    port: 3306,
    password: "Makeitea$y8",
    user: "root",
    // database:

})
//connecting
connection.connect(function(err){
    if(err) throw err
})