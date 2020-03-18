const mysql = require("mysql")
const inquirer = require("inquirer")
//making the connection
const connection = mysql.createConnection({

    host:"localhost",
    port: 3306,
    password: "Makeitea$y8",
    user: "root",
    database: "sql_hw"

})
//connecting
connection.connect(function(err){
    if(err) throw err
    start()
})

//function that holds logic
function start(){
//letting user choose the method they want to run
    inquirer.prompt([
        {
            name: 'options',
            type: 'list',
            message:'will you like to do?',
            choices:[
                "add department",
                "add roles",
                "add employees",
                "view department",
                "view roles",
                "view employees ",
                "update employee roles"
            ]

        }
        

    ]).then(function(answers){
        switch (answers.options) {
            case "add department": addDepartment()
                
                break;
            case "view department": viewDepartment()
                
                break;

            default:
                break;
        }
    })




}
//adds the department 
function addDepartment(){
    inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "what is the departments name?"
        },
        {
            type: "number",
            name: "depId",
            message: "what is the departments id"
        }

    ]).then(function(answer){
        const query = "Insert Into department SET ?"
        connection.query(query,{
          name:answer.departmentName,
          id:answer.depId
        },
        function(err){
            if(err) throw err
            console.log("Department added")
            start()
        })
    })



};

//view department
function viewDepartment(){
    const query = "SELECT * FROM department"
    connection.query(query, function(err,res){
        if(err) throw err;
        for(var i = 0; i < res.length; i++){
            console.log(res[i].id + "-" + res[i].name)
        }
        start()
    })
}