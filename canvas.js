var canvas = document.getElementById('#app')
var context = canvas.getContext('2d')
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var previousPiont
canvas.addEventListener('touchmove',function(e){
    e.preventDefault()
    let penType = document.querySelector('input[name="penType"]:checked').value
     var {pageX,pageY} = e.touches[0];
    if(penType ==='pen'){
        if(previousPiont){
            context.strokeStyle = 'black';
            context.beginPath();
            context.moveTo(previousPiont.pageX,previousPiont.pageY);
            context.lineTo(pageX,pageY);
            context.stroke()
        }
        previousPiont = {
            pageX,pageY
        }
    }else if(penType ==='eraser'){
        context.clearRect(pageX-5,pageY-5,15,15)
    }
})
canvas.addEventListener('touchend',function(){
    previousPiont = null
})
save.onclick = function(){
    var canvas = document.getElementById('#app')
    var data=canvas.toDataURL("image/png");
    var newWindow = window.open('about:blank','image from canvas')
    newWindow.document.write("<img src='"+data+"' alt='from canvas'/>")
}