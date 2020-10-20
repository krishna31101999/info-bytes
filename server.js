const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

var Mflipflop = require('./backend/models/mflipflops');


var dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auto_reconnect: true
  };
  mongoose.connect("mongodb+srv://krishna31:krishna31@cluster0-dpmwc.mongodb.net/footwear?retryWrites=true&w=majority", dbOptions);
  
  mongoose.connection.on('connected', function () {
    console.log("Connected to DB");
  });
  mongoose.connection.on('error', function (err) {
    console.log("Error while connecting to DB: " + err);
  });


  const app = express()
  app.use(express.static(__dirname + '/dist/footwear'))

  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.use(cors());

app.get('/', (req, res) => res.sendFile(path.join(__dirname + 'dist/footwear/index.html')))
app.get('/test', (req, res)=>{
    res.json({'status': 'Application is Up and Running'});
  })
app.get('/api/mflipflops',(req,res)=>{
    Mflipflop.find({},null,{
limit:30
    },(err,docs)=>{
        if (err)
        {
            console.log('Error while getting en flipflops from DB in /api/mflipflop: ' + err);
        res.json({
          error: err
        });
        }
        else{
            res.json(docs);
        }
    });
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
