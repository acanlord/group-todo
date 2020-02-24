var express = require("express");
var router = express.Router();
var mongojs = require("mongojs")
var db = mongojs(
    "tasklist",
    [tasks]
);

//Get All Takss
router.get("/tasks", (req, res, next) => {
    db.tasks.find({}, {_id: 1, title: 1}, (err, tasks) => {
        if(err){
            res.send(err);
        }

var data = [];
Object.keys(tasks).forEach((key) => {
    var val = tasks[key];
    data.push([val.title, val._id]);
});
res.send(data);
});
});

//Add TAsk
router.post("/task", (req, res, next) => {
    var task = req.body;
if(!task.title){
    
}

})