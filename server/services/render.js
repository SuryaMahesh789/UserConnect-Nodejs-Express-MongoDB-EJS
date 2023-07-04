// axios module allows to make request 
const axios =require('axios')


exports.homeRoutes=(req,res)=>{
    // make a get request to api users and return the response to the web page 
    // res.render('index',{users:"New Data"});

    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        console.log(response)
            // res.render('index',{users:"New Data"});
        res.render('index',{users:response.data});
    })

    .catch(err=>{ 
        res.send(err);
    }) 
} 

exports.add_user=(req,res)=>{
    res.render('add_user');
}
// when we want's to edit details of particular user,
// not only simply rdirecting to the update user page but also
//  we also need to display his current details to that page


// to get the specific user from the database, and render updata_user page along with the user data 
// pass the id variable to the paramter , this paramter make a request, to the url specified , get the specific record from the database
// req.query.id parameter
exports.update_user=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render('update_user',{user:userdata.data})
    })
    .catch(err=>{
        res.send(err); 
    })
    // res.render('update_user');
}

