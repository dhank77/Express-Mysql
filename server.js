const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/router.js");

const app = express();

let whitelist = [
    'http://localhost:5555',
];

let corsOption = {
    origin : function(origin, callback){
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        }else{
            callback(new Error("Blocked by cors"));
        }
    }
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', router);

app.get("/", (req, res) => {
    res.json({
        "message" : "run with express"
    });
});

app.listen(5555, () => {
    console.log('Local port 5555')
});