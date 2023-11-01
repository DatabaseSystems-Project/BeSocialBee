const mysql = require('mysql');
const express = require('express'); //for APIs.  Express simplifies the process of building web applications by providing a set of robust features and tools that handle common web development tasks, such as routing, handling HTTP requests and responses
const cors=require('cors'); //which stands for Cross-Origin Resource Sharing, is a security feature and a critical concept in web development that applies to Node.js and other web servers. 
const bodyParser=require('body-parser'); //used to parse the body of incoming HTTP requests


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());



//---------------------------------------------- DATABASE ------------------------------------------------------------


const db = mysql.createConnection({
    host:"database-3.ciqpxqolslw4.eu-north-1.rds.amazonaws.com",
    port:"3306", //
    user:"master",
    password:"masterpassword",
    database:"beedatabase"
});


// database connection 
db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to the database');

            
        // Define the SQL query to create a table
        const userTable = `
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255)
        );
        `;
        
        // Execute the SQL query to create the table
        db.query(userTable, (err) => {
        if (err) {
        console.error('Error creating the table:', err);
        } else {
        console.log('Table created successfully');
        }
        // Close the database connection
        db.end();
        });
    //}
    //});
});


//----------------------------------------------------------------------------------------------------------
// Middleware to parse incoming JSON data
app.use(express.json());

app.listen(3001,()=>{
    console.log('Port Connected.');
})


app.get('/submitform', function (req, res) { //when page has been load in the browser, this get function will be called
    //if your HTML file is in the root directory (next to package.json)
        res.send('components/Login.css');
}); 


var values = [];
app.post('/submitform',(req,res)=>{
    //res.send(req.body);
    var {name,email,password} = req.body;
    values = [name,email,password];
    //console.log(values);
    console.log('Data is received.');
    res.json('Form Received'); 


    console.log(values[0],values[1],values[2]);
    if(values[0]!=null && values[1]!=null && values[2]!=null){
        console.log('bbbbbbb');
        app.listen(3001,()=>{
            console.log('Port Connected.');
        })

        db.query("INSERT into users (name,email,password) VALUES (?, ?, ?)",values,(err,res)=>{
            if (err) console.error('Error inserting data into the database: ' + err);
            //res.redirect('/'); // Redirect to the form page
        });
    }
});




//----------------------------------------------------------------------------------------------------------
/*
app.post('/',(req,res)=>{
    var {name,email,password} = req.body;
    var records = [[name,email,password]];
    if(records[0][0][0]!=null){
        db.query("INSERT into user (name,email,password) values(?,?,?)",[records],function(err,res,fields){
            if(err) throw err;
            console.log(res);
        });
    }
    res.json('Form Received');
})*/







 /* app.get('/',(req,res)=>{
    res.json("OK");
  })


  app.post('/',(req,res)=>{
    var {name,email,password} = req.body;
    var records = [[req.body.name,req.body.email,req.body.password]];
    if(records[0][0][0]!=null){
        db.query("INSERT into user values(name,email,password)",[records],function(err,res,fields){
            if(err) throw err;
            console.log(res);
        });
    }
    res.json('Form Received');
  })

  app.listen(3306,()=>{
    console.log('Port 3306');
  })




 
    
        


 */
  