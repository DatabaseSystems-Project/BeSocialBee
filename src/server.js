const mysql = require('mysql');
const express = require('express'); //for APIs.  Express simplifies the process of building web applications by providing a set of robust features and tools that handle common web development tasks, such as routing, handling HTTP requests and responses
const cors=require('cors'); //which stands for Cross-Origin Resource Sharing, is a security feature and a critical concept in web development that applies to Node.js and other web servers. 
const bodyParser=require('body-parser'); //used to parse the body of incoming HTTP requests


const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

const db = mysql.createConnection({
    host:"database-3.ciqpxqolslw4.eu-north-1.rds.amazonaws.com",
    port:"3306",
    user:"master",
    password:"masterpassword",
    database:"beedatabase"
});

 app.listen(3306,()=>{
        console.log('Port Connected.');
    })

/* app.get('/',(req,res)=>{
    var {name,email,password} = req.body;
    var records = [[req.body.name,req.body.email,req.body.password]];
    if(records[0][0][0]!=null){
        db.query("INSERT into user values(name,email,password)",[records],function(err,res,fields){
            if(err) throw err;
            console.log(res);
        });
    }
    res.json('Form Received');
}) */


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

// Serve the HTML form
app.use(express.static('public'));

app.post('/submit',(req,res)=>{
    var {name,email,password} = req.body;
    var values = [name,email,password];
    if(values[0]!=null && values[1]!=null && values[2]!=null){
        db.query("INSERT into users (name,email,password) VALUES (?, ?, ?)",values,function(err,res,fields){
            if(err) throw err;
            console.log(res);
            res.redirect('/'); // Redirect to the form page
        });
    }
    res.json('Form Received');

   
})







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
  