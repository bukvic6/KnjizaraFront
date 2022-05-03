var registracija = document.getElementById('sgnForm');
registracija.addEventListener('submit',function(e){
    e.preventDefault();
    var Email = document.getElementById('sgnEmail').value.trim();
    var Password = document.getElementById('sgnPassword').value.trim();
    var Test = document.getElementById('test').value.trim();
    if (Email == '' || Password == '' || Test == '') {
        alert("morate uneti sve podatke za prijavu.");

    }
    else {
        // var firebaseUrl1 = 'https://knjizara-b9757-default-rtdb.firebaseio.com/korisnici.json';
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    var korisnici = JSON.parse(request.responseText);
                    // var ime = '';
                    for (var id in korisnici) {
                        var korisnik = korisnici[id];
                        if (korisnik.email == Email || korisnik.password == Password){
                            window.alert("izaberute imejl i sifru koja ne postoji ");
                           break;
                        }
                        else{

                            window.alert('Uspesno ste obavili registraciju.');
                            // window.location.href('glavna.html');
                            // alert("uspesno ste se registrovali")
                        
                            window.location.replace("glavna.html");
                        }
                    }
                    
                }
                else {
                    alert("greska: " + this.status)
                }
            }

        };
        var url = loginForm.getAttribute('action');
        request.open('GET', url);
        request.send();
    }
    

})