//counter code
var button = document.getElementById('counter');
button.oneclick = function(){
    //create a request
    
    var request= new XMLHttpRequest();
    //capture the response and store it in a variable
    
        request.onreadystatechange= function(){
            if(request.readystate === XMLHttpRequest.DONE){
                //take some action
                
                if(request.status === 200){
                    var counter= request.responseText;
                    var span= documnet.getElementById('count');
                    span.innerHTML=counter.toString();
                }
            }
            //not done yet
        };
        
        //make a request
        request.open('GET','http://chayansraj.imad.hasura-app.io/counter',true);
        request.send(null);
};