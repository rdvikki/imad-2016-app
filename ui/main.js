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
   
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit-btn');
submit.onclick = function(){
 //make a request to the server and send the names
 //capture a list of name and render it as list
 var names=['name1','name2','name3'];
 var list='';
 for (v=0; i< names.length; i++)
 {
     list+= '<li>' + name[i] + '</li>';
 }

    var ul=document.getElementById('namelist');
    ul.innerHTML = list;
};