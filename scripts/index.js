// Importing mysql and csvtojson packages 
// Requiring module 
const csvtojson = require('csvtojson'); 
const mysql = require("mysql"); 

const hostname = "localhost", 
    username = "root", 
    password = "root", 
    databsename = "csvtomysql"

let con = mysql.createConnection({ 
    host: hostname, 
    user: username, 
    password: password, 
    database: databsename, 
}); 

con.connect((err) => { 
    if (err) return console.error( 
            'error: ' + err.message); 
  
    con.query("DROP TABLE Sales",  
        (err, drop) => { 
   
        var createStatament =  
        "CREATE TABLE sample(Name char(50), " + 
        "Num int, Pedido int, Emissão DATE, Produto char(50), U.M. char(50), Quantidade int, Vlr. Unit. FLOAT, Vlr. Desc. FLOAT, Vlr. Frete FLOAT, Vlr. ICMS ST FLOAT, Vlr. IPI FLOAT, Desp. Aces. FLOAT, Vlr. Total, Cod_Produto int, Marca char(50), Grupo char(50), Descrição Linha char(50)"
   
        con.query(createStatament, (err, drop) => { 
            if (err) 
                console.log("ERROR: ", err); 
        }); 
    }); 
});

// CSV file name 
const fileName = "sample.csv"; 
  
csvtojson().fromFile(fileName).then(source => { 
  
    // Fetching the data from each row  
    // and inserting to the table "sample" 
    for (var i = 0; i < source.length; i++) { 
        var Name = source[i]["Name"], 
            Email = source[i]["Email"], 
            Age = source[i]["Age"], 
            City = source[i]["City"] 
  
        var insertStatement =  
        `INSERT INTO sample values(?, ?, ?, ?)`; 
        var items = [Name, Email, Age, City]; 
  
        // Inserting data of current row 
        // into database 
        con.query(insertStatement, items,  
            (err, results, fields) => { 
            if (err) { 
                console.log( 
    "Unable to insert item at row ", i + 1); 
                return console.log(err); 
            } 
        }); 
    } 
    console.log( 
"All items stored into database successfully"); 
}); 
