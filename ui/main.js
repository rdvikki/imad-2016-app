var button = document.getElementById('counter');
//creating a request object
button.onclick = function () {
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
    
    request.open('Get','http://rdvikki.imad.hasura-app.io/counter',true);
   request.send(null);
    
    
};
