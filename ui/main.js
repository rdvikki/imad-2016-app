console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='Hi, This is Vigneshwari';
var img=document.getElementById('madi');
img.onclick = function () {
    var interval=setInterval(moveLeft,100);
    };