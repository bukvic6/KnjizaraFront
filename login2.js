

var loginForm = document.getElementById ('loginForm');
loginForm.addEventListener('submit',function(e){
    e.preventDefault();
    var email = document.getElementById('txtEmail').value.trim();
    var password = document.getElementById('txtPassword').value.trim();
    if (email == '' || password == '') {
        alert("Morate uenti sve podatke za prijavu.");
    } else {
        // var firebaseUrl2 = 'https://knjizara-b9757-default-rtdb.firebaseio.com/korisnici/';
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    var korisnici = JSON.parse(request.responseText);
                    var ime1 = '';
                    for (var id in korisnici) {
                        var korisnik = korisnici[id];
                        if (korisnik.email == email && korisnik.password == password){
                            ime1 = korisnik.ime1;
                            break;
                        }
        
                    }
                    if (ime1 == '') {
                        alert ("neispravni login podaci.");
                    }else{
                        window.location.replace("glavna.html");
                        

                    }
                }else {
                    alert("greska: " + this.status)
                }
            }
        };
        var url = loginForm.getAttribute('action');
        request.open('GET', url);
        request.send();

    }


});