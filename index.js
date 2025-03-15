const http = require('http')
const port=8000
const fs = require('fs');


const requstHandler = function (req,res){

res.writeHead(200,{'content-type':"text/html"});
console.log(req.url);

let filename;

switch(req.url){

    case'/':
    filename='./app.html';
    break;

    case'/about':
    filename='./about.html';
    break;

    case'/contect':
    filename='./contect.html';
    break;

    case'/team':
    filename='./team.html';
    break;

    default:
    filename="./404.html";
    break;

}
    fs.readFile(filename,(err,data)=>{
        if(err){
            console.log(err);
            return false;
        }
        res.end(data);
    })
}

const app = http.createServer(requstHandler);

app.listen(port, (err) => {
   err ? console.log(err) : console.log(`server is renning : ${port}`);
})
