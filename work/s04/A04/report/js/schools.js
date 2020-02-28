/**
 * A function to wrap it all in.
 */

(function () {
var selection = document.getElementById("municipalities")
selection.addEventListener('change', function(){
    console.log("Change detected")
    var table = document.getElementById('table');
    table.innerHTML='';
    d(selection.options[selection.selectedIndex].text);
}) 
fetch ('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/')
.then((data) => data.json())
.then(function (data) {
var kommuner = data.Kommuner;
kommuner.forEach(function(element){
    var option = document.createElement('option');
    option.append(document.createTextNode(element.Kommunkod));
    selection.append(option);
})
});
    
}());


function d(kommunName) {
    var table = document.getElementById('table');
    "use strict";

    var url = 'https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/' + kommunName;
    //var url = 'schools.json';
    //var url = 'schools-lund.json';
    fetch(url)
        .then((data) => data.json())
        .then(function (data) {

            // handle data datass
            var keys = Object.keys(data.Skolenheter[0]);
            console.log(keys);
            var tableHead = document.createElement('tr');
            keys.forEach(function (key) {
                var tableHeadCell = document.createElement('th');
                tableHeadCell.append(document.createTextNode(key));
                tableHead.append(tableHeadCell);
            });
            table.append(tableHead);

            data.Skolenheter.forEach(function (school) {
                var row = table.insertRow();
                row.insertCell().append(document.createTextNode(school.Skolenhetskod));
                row.insertCell().append(document.createTextNode(school.Skolenhetsnamn));
                row.insertCell().append(document.createTextNode(school.Kommunkod));
                row.insertCell().append(document.createTextNode(school.PeOrgNr));
            })





        })
        .catch(err => {
            // handle errors

            
        });


}

function drawCircle(selector, radius, angle, x, y) {
    var total = $(selector).length;
    var alpha = Math.PI * 2 / total;
    angle *= Math.PI / 180;

    $(selector).each(function (index) {
        var theta = alpha * index;
        var pointx = Math.floor(Math.cos(theta + angle) * radius);
        var pointy = Math.floor(Math.sin(theta + angle) * radius);

        $(this).css('margin-left', pointx + x + 'px');
        $(this).css('margin-top', pointy + y + 'px');
    });
}
  
