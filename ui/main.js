var button = document.getElementById('counter');
counter= 0;
button.onclick = function () {
                var request = new XMLHttpRequest();
                request.onreadystatechange=function(){
                    if(request.readyState === XMLHttpRequest.DONE && request.status===200){
                    var counter=request.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                    
                }
            };
                request.open('Get','http://rdvikki.imad.hasura-app.io/counter',true);
                request.send(null);

            };
   
