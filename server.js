// we need express module
const express=require('express');

// config.env file has variable port holds the port value
// to make th express to use the port variable of the config file ,
//  we need to inform to the express server to use the variable declared in the config 
//  file by giving the appropriate path of the config file to the express server
const dotenv=require('dotenv');

const morgan=require('morgan');

const bodyparser=require('body-parser');

const path=require('path');

const connectDB=require('./server/database/connection');

// create an app as express application
const app=express();

// this allows to share the code to other people 
// instead of sharing our credentials to ohers 
// we simply share our source codeso that they can creat their own port value
dotenv.config({path:'config.env'});



// if the env variable of this .env  is not available then pass default port value as 8080
const PORT=process.env.PORT||8080

// log requests

// print log message using morgan module
app.use(morgan('tiny'));


// after writing the oopar wale log request just save the file 
// and reload the http://localhost:3000, check the terminal to see 
// the GET request and the time it take to generat ethe request


// mongodb connection 
connectDB();


// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// once u link to body parser module just down here 

// set view engine
app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"views/ejs"));
// the above statement is useful only if we are planned to save all the ejs files into seperate 
// folder inside the views folder inside the root folder

// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));

// let's say if we have style.css file inside the css folder
//css/style.css

// Similarly load the Image,css folders of the assets to the express
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

// next we gonna create views for the express application
// let's how we gonna create html template for this crud application

// create a default route 
// when the url matches with the root route ==> excecute the call back function

// we have already set the view engine with the .ejs extension so no need to specify the 
// extension of the index file, while rendering the templates

// res.send() to send message to the web page from the server
// rse.render() to render the html pages to the server

// this calls can be managed from the Router.js inside the routes folder 
app.use('/',require('./server/routes/router'));
// app.get('/',(req,res)=>{
//     // res.send("Crud Application");
//     res.render('index');
// })

// app.get('/add-user',(req,res)=>{
//     // res.send("Crud Application");
//     res.render('add_user');
// })

// app.get('/update-user',(req,res)=>{
//     // res.send("Crud Application");
//     res.render('update_user');
// })

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});




// nodemon will restarts the server only 
// when we make changes in the js FileS 

// we need to inform to the nodemon to restart the server 
// whenever we make changes in the ejs files




// mongodb+srv://<username>:<password>@cluster0.r3on4ye.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://<username>:<password>@cluster0.r3on4ye.mongodb.net/