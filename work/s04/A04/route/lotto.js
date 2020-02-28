/**
 * Route for today.
 */
"use strict";

var express = require("express");
var router  = express.Router();

router.get("/", (req, res) => {
    var data = {
        drawnNumbers : [3,4,5,6,7,8,9]
    };
    var correctNumbers = 0;

    if(typeof req.query.row !== "undefined"){


        var array =req.query.row.split(",");
        array.forEach(function(myNumber) {
            data.drawnNumbers.forEach(function(drawnNumber){
                if(myNumber == drawnNumber){
                    correctNumbers ++;
                }
            })  
        });
        data = {
            yourNumbers : array,
            correctNumbers: correctNumbers
        }
        res.render("lotto", data);
    }

    data = {
        yourNumbers : ['','','','','','',''],
        correctNumbers: "none lol"
    }
    res.render("lotto", data);
    
});

module.exports = router;
