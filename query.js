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

        connection.query("SELECT * FROM users", function (err, result) {
            if(err){
                console.log(err)
            }else{
                result.forEach(function(row){
                    console.log('User ID:'+row.id);
                    console.log('User:'+row.user_name);
                    console.log('User DOB:'+row.user_dob);
                    console.log('User City:'+row.user_city);
                    console.log('------------------------------------------------------')

                })
            }
        })
    }
})
