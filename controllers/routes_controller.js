const express = require("express")
var router = express.Router()
const mongoose = require("mongoose")
const Routes = mongoose.model("Routes")

router.get("/", (req,res) => {
    res.render("router/crud", {
        viewTitle: "Insert Route"
    });
});

router.post('/', (req,res) => {
    if (req.body._id == '') {
        insertRecord(req, res)
    } else {
        updateRecord(req, res)
    }
});

function insertRecord(req, res){
    var route = new Routes()
    route.Store_ID = req.body.Store_ID
    route.Store_Area = req.body.Store_Area
    route.Items_Available = req.body.Items_Available
    route.Daily_Customer_Count = req.body.Daily_Customer_Count
    route.Store_Sales = req.body.Store_Sales
    
    route.save((err, doc) => {
        if (!err) {
            res.redirect("router/list")
        } else {
            console.log("Error during insert: " + err)
        }
    });
}

function updateRecord(req, res){
    Routes.findOneAndUpdate(
        { _id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if (!err) {
            res.redirect("router/list")
        } else {
            console.log("Error during update: " + err)
        }
    });
}

router.get("/list", (req, res) => {
    Routes.find((err,docs) =>{
        if (!err) {
            res.render("router/list", {
                list: docs
            })
        } else {
            console.log("Error in retrieval: " + err)
        }
    });
});

router.get("/:id", (req,res) => {
    Routes.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("router/crud", {
                viewTitle: "Update Route",
                route: doc,
            });
            console.log(doc);
        }
    });
});

router.get("/delete/:id", (req,res) => {
    Routes.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.render("router/list");
        } else {
            console.log("Error in deletion" + err);
        }
    });
});

module.exports = router
