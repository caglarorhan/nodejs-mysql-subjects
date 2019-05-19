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
        console.log("[mysql error]",err);
    }else{

        connection.query("DELETE FROM users WHERE id<4", function (err, result) {
            if(err){
                console.log("[mysql error]",err);
            }else{

                console.log(result.affectedRows+ " kayit silindi");

            }
        })
    }
})
