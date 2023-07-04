const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB


// I have the same issue. Instaead

// mongoose.connect(URI, {
//    useCreatendex: true, 
//    useFindAndModify: false, 
//    useNewUrlParser: true, 
//    useUnifiedTopology: true 
// }, err => {
//    if(err) throw err;
//    console.log('Connected to MongoDB!!!')
// })
// try this:

// mongoose.connect(URI,
//     err => {
//         if(err) throw err;
//         console.log('connected to MongoDB')
//     });