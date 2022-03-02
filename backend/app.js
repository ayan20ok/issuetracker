const express = require('express')
const path = require("path")
const mdb = require("./mdb.js")


const app = express()
const port = 3000

console.log(__dirname)
console.log(__filename)

app.use(express.static(path.join(__dirname, "/public")))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/about', (req, res) => {
    res.send({title:"About us", desc:"This is the about us page."})
  })

  app.get('/issuelist', (req,res)=>{
    mdb.ali((error,response)=>{

      if(error){
        res.send("There is some error in the file." + error)
    }else{
        console.log("all files:"+ response)
        res.send(response)
    }

    })

  })

  app.get('/issuestatus', (req, res) => {
   // res.send("This is a test")
console.log("Query:" + req.query.complete)
    mdb.ndi(req.query.complete, (error, response)=>{

        if(error){
            res.send("There is some error in the file.")
        }else{
            console.log("Ayan:"+ response)
            res.send(response)
        }


    });
    
  })

  app.get('/addIssue', (req, res) => {
    // res.send("This is a test")
 console.log("Query:" + req.query.isn + req.query.desc + req.query.comp)
     mdb.adi(req.query.isn, req.query.desc, req.query.comp, (error, response)=>{
 
         if(error){
             res.send("There is some error in the file.")
         }else{
             console.log("added issue:"+ response)
             res.send(response)
         }
 
 
     });
     
   })

  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    mdb.cDB();
  })