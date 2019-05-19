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

        console.log("Mysqle basarili bir sekilde baglanildi")
    }
})
