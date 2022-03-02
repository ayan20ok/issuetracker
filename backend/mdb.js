const { MongoClient } = require('mongodb');
const { any } = require('webidl-conversions');



/*const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://testuser:Ayan20ok@issues.0dv2c.mongodb.net/sample_training?retryWrites=true&w=majority";
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);*/

//const uri = "mongodb+srv://testuser:Ayan20ok@issues.0dv2c.mongodb.net/sample_training?retryWrites=true&w=majority";
const url = "mongodb+srv://testuser:Ayan20ok@issues.0dv2c.mongodb.net/";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
var db = any;

const connectDB = ()=>{

  client.connect((error, client) => {
    if(error){
      return console.log("Unable to connect." );
    }else{
   
     db = client.db("issuetracker");
      return console.log("database successfully Connected!")
    }
    
    
   
   
   
   
   } )



}

const notdoneIssues = (qr, callback)=>{
  

  db.collection('issuelist').find({completed:qr}).toArray((error, issuelist)=>{

    if(error){
      //return error//console.log("search has an error");
     callback("There is an error", undefined)
    }else
    {
      //console.log(issuelist);
      //return issuelist
      callback(undefined,issuelist)

    }
    
   

  })

}

const allissues = (callback) =>{

  db.collection('issuelist').find({}).toArray((error, issuelist)=>{

    if(error){
      //return error//console.log("search has an error");
     callback("There is an error",undefined)
    }else
    {
      //console.log(issuelist);
      //return issuelist
      callback(undefined,issuelist)

    }
    
   

  })

}

const addIssues = (isno, desc, comp, callback)=>{
  

  
  db.collection('issuelist').insertOne({issueno:isno, desc:desc, completed:comp}, (error,result)=>{

    if(error){
      //return error//console.log("search has an error");
     callback("There is an error", undefined)
    }else
    {
      
      callback(undefined,result)

    }

  })

}

module.exports = {cDB:connectDB, ndi:notdoneIssues, adi:addIssues, ali:allissues};