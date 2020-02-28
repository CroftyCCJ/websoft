(function () {




document.getElementById("linkDenmark").addEventListener("click",function(event){
    denmark()


})
document.getElementById("linkSweden").addEventListener("click",function(event){
    sweden()


})
document.getElementById("linkLibya").addEventListener("click",function(event){
    libya()


})

}());



function sweden(){
    var canvas = document.getElementById("Sweden")
    var ctx = canvas.getContext("2d");
    ctx.fillStyle ="blue"
    ctx.fillRect(0, 0, 20, 40);
    ctx.fillRect(0, 50, 20, 40);
    ctx.fillRect(30, 0, 70, 40);
    ctx.fillRect(30, 50, 70, 40);
    ctx.fillStyle ="yellow"
    ctx.fillRect(0, 40, 100, 10)
    ctx.fillRect(20, 0, 10, 90)
    canvas.addEventListener("click", function(){
        canvas.style.opacity="0";
    })
    }
function libya(){
    
    var canvas = document.getElementById("Libya 2011")
    var ctx = canvas.getContext("2d");
        ctx.fillStyle ="#008000"
        ctx.fillRect(0, 0, 100, 90);
        canvas.addEventListener("click", function(){
            canvas.style.opacity="0";
        })
        }
    
    
function denmark(){
    var canvas = document.getElementById("Denmark")
    var ctx = canvas.getContext("2d");
    ctx.fillStyle ="red"
    ctx.fillRect(0, 0, 20, 40);
    ctx.fillRect(0, 50, 20, 40);
    ctx.fillRect(30, 0, 70, 40);
    ctx.fillRect(30, 50, 70, 40);
    ctx.fillStyle ="white"
    ctx.fillRect(0, 40, 100, 10)
    ctx.fillRect(20, 0, 10, 90)
    canvas.addEventListener("click", function(){
        canvas.style.opacity="0";
    })
    }
    