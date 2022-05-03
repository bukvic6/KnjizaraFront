var firebaseUrl = "https://knjizara-b9757-default-rtdb.firebaseio.com/knjige.json";
// slikaIds = [];
// var slike = {};

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {
            var knjige = JSON.parse(request.responseText)

            // console.log(knjige);
            var main = document.getElementById('main');
            for (let id in knjige){
                var knjiga = knjige[id];
                // console.log (knjiga); 


                var main = document.getElementById ("main");

                var div = document.createElement ("div");
                div.classList.add ("kartica");
    
                var naziv = document.createElement('h3');
                naziv.classList.add("naziv");
                naziv.innerText = knjiga["naziv"];

                var autor = document.createElement ("p");
                autor.innerHTML = knjiga["autor"];

                var cena = document.createElement ("p");
                cena.innerHTML = knjiga["cena"] + " dinara";

                var dugme = document.createElement ("button");
                dugme.classList.add("button");
                dugme.innerHTML = "kupi";
                



                var div2 = document.createElement('div');
                div2.id = id;
                
                div2.setAttribute('class', 'rating');
                // for (var i = 1; i<div2; i++){
                //     var span = document.getElementsByTagName('span')
                //     span.addEventListener('click', function(){
                //         var value = this.getAttribute('value')
                //     }
                // }

                for (var i = 1; i <= 5; i++) {
                  var span = document.createElement('span');
        
                  if (i <= knjiga['ocena']) {
                      span.classList["add"]('active');
                    }
                    span.setAttribute('value', i);
                    div2.appendChild(span);
                  }
                  
            
 

                var x=document.getElementsByTagName("span");
                
                for(var i=0;i<x.length;i++){
                  x[i].addEventListener("click",function(){
                    var value=this.getAttribute("value");
                    
                    clearClass();
                    for(var j=value-1;j>=0;j--){
                      x[j].classList.toggle('a');
                    }
                  })
                  
                  
                };
                
                
                function clearClass(){
                  var x=document.getElementsByTagName("span");
                  for(var i=0;i<x.length;i++){
                    //   console.log(x[i].classList);
                      x[i].classList.remove('a');
                      
                      
                  };
                  
                }
                

     



                var slika = document.createElement ("img");
                slika.classList.add("img");
                slika.src = knjiga ["slika"];

                slika.addEventListener('click', function(e) {
                    location.href = "knjiga1.html?knjige="+id;
                    });
                    
                
                main.appendChild(div);
                div.appendChild(slika);
                div.appendChild(naziv);
                div.appendChild(autor );
                div.appendChild(cena);
                div.appendChild(dugme);
                div.appendChild(div2);
                
                
               

                
                
            }
            
        }
    }
}

request.open("GET", firebaseUrl);
request.send();

