var express = require('express')
var app = express()
var  port = 3000


var fs = require("fs");
var datread = "data.txt";
let Arrayphoto =[];
    fs.readFile(datread, 'utf8', (err, data) => {
        

    if (err) {
        console.log(err.message);
    } else {
        Arrayphoto=data.split("\n");
         
       
        console.log(Arrayphoto );
    }
});


let pagesize=20;
app.get("/photo/:page/", (req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
const page=req.url.split("/")[2];
start=(page-1)*pagesize;
end=start+ pagesize;
res.send( Arrayphoto.slice(start,end));
});
app.listen(3000);