var button = document.getElementById('counter');

button.onclick = function () {
   //creating a request object 
    var request = new XMLHttpRequest();
    //Checking for the state of the request whether done or not
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.Done && request.status===200){
           {
                var counter=request.responseText;
                counter=counter + 1;
                var span=document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //making a request
    
    request.open('Get','http://rdvikki.imad.hasura-app.io/counter',true);
   request.send(null);
    
    
};
