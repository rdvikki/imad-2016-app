console.log('Loaded!');
var button = document.getElementById('counter');
var counter=0;
//creating a request object
button.onclick=function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.Done && request.status===200){
           {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //making a request
    
    request.open('Get','http://rdvikki.imad.hasura-app.io',true);
   request.send(null);
    
    
};
