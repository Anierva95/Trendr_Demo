// Importing mysql and csvtojson packages 
// Requiring module 
const csvtojson = require('csvtojson'); 
const mysql = require("mysql"); 

const hostname = "localhost", 
    username = "root", 
    password = "362514331Aa'", 
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
        "CREATE TABLE Sales(" + 
        "Num int, Pedido int, Emissão DATE, Produto varchar(100), UM char(50), Quantidade int, Vlr_Unit FLOAT, Vlr_Desc FLOAT, Vlr_Frete FLOAT, Vlr_ICMS_ST FLOAT, Vlr_IPI FLOAT, Desp_Aces FLOAT, Vlr_Total FLOAT, Cod_Produto char(50), Marca char(50), Grupo char(50), Descrição_Linha char(50))"
   
        con.query(createStatament, (err, drop) => { 
            if (err) 
                console.log("ERROR: ", err); 
        }); 
    }); 
});

const fileName = "VitaDerm_Sales.csv"; 
  
csvtojson().fromFile(fileName).then(source => { 
  
    for (var i = 0; i < source.length; i++) { 
        var Num = source[i]["Num"], 
            Pedido = source[i]["Pedido"], 
            Emissão = source[i]["Emissão"], 
            Producto = source[i]["Produto"], 
            um = source[i]["U.M."],
            Quantidade = source[i]["Quantidade"],
            Unit = source[i]["Vlr. Unit."],
            Desc = source[i]["Vlr. Desc."],
            Frete = source[i]["Vlr_Frete"],
            Icms = source[i]["Vlr_ICMS_ST"],
            Ipi = source[i]["Vlr_IPI"],
            Aces = source[i]["Desp. Aces."],
            total = source[i]["Vlr_Total"],
            producto2 = source[i]["Cod_Produto"],
            marca = source[i]["Marca"],
            grupo = source[i]["Grupo"],
            line = source[i]["Descrição Linha"]
  
        var insertStatement =  
        `INSERT INTO Sales values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`; 
        var items = [Num, Pedido, Emissão, Producto, um, Quantidade, Unit, Desc, Frete, Icms, Ipi, Aces, total, producto2, marca, grupo, line]; 

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
