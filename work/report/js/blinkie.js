(function () {

    var blinking = false;

    var intervalSU;
    var intervalGE;
    var intervalBY;
    var intervalSE;

    var blinkie = document.getElementById("or");
    blinkie.addEventListener('click', function(event){


        if (blinking === true){
            clearInterval(intervalSU);
            clearInterval(intervalGE);
            clearInterval(intervalBY);
            clearInterval(intervalSE);
            blinking = false;
        }else{
            intervalSU = blink("su");
            intervalGE = blink("ge");
            intervalBY = blink("by");
            intervalSE = blink("se");
            blinking = true;
        } 
    });
}());

function blink(id){
    var element = document.getElementById(id);

    var round=1;
    var interval = window.setInterval(function(){

        if (round === 1){
            element.style.visibility = "visible";
            round = 0;
        }else{
            element.style.visibility = "hidden";
            round = 1;
        }

    },500);
    return interval;
}
