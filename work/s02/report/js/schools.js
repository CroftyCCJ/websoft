/**
 * A function to wrap it all in.
 */
var box = $('.box');
var box_start = 0;
export function d() {
    "use strict";

    var url = ' https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/0764';
    fetch(url)
    .then(response => {
        // handle response datass
      
        return response.json();


    }).then((myJson) => {

        

        
        
        
        console.log(myJson);
    })


     .catch(err => {
        // handle errors
    });

    
};
function drawCircle(selector, radius, angle, x, y) {
    var total = $(selector).length;
    var alpha = Math.PI * 2 / total;
    angle *= Math.PI / 180;
  
    $(selector).each(function(index) {
      var theta = alpha * index;
      var pointx  =  Math.floor(Math.cos( theta + angle ) * radius);
      var pointy  = Math.floor(Math.sin( theta + angle ) * radius );
  
      $(this).css('margin-left', pointx + x + 'px');
      $(this).css('margin-top', pointy + y + 'px');
    });
  }
  
