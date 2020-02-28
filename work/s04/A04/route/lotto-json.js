/**
 * General routes.
 */
"use strict";

const express = require("express");
const router  = express.Router();


// Add a route for the path /
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
    }
    res.send(data);
});



module.exports = router;
