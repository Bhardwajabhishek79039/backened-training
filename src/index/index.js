const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: Mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongodb+srv://abhishek163149:1Jwyh0IzN0pej0iq@cluster0.hgec8.mongodb.net/shivam2041-Db?retryWrites=true&w=majority"
, {
   useNewUrlParser: true 
}
).then( () => {console.log( "MongoDb is connected")}  )
.catch( err => console.log(err))





app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
