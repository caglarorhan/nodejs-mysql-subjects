console.log("yes")
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Wew8WRBCnolRwsaE",
    database: "nodejs"
})


connection.connect(function(err){
    if(err){
        console.log(err)
    }else{

        connection.query("INSERT INTO users (user_name,user_password,user_dob,user_city) values ('John Doe','987654321',Now(),'Istanbul')",function(err,result){
            if(err){console.log(err)}else{

                console.log(result)

            }
        })
    }
})
