/*inicio*/

let indice = 1;
muestraslides(indice);

function avazaslide(n){
    muestraslides(indice+=n);
}

function posicionslides(n){
    muestraslides(indice=n);
}
setInterval(function tiempo(){
    muestraslides(indice+=1)
},4000);
function muestraslides(n){
    let i;
    let slides = document.getElementsByClassName("mislider");
    let barras = document.getElementsByClassName("barra");

    if(n > slides.length){
        indice = 1;
    }

    if(n < 1){
        indice = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace("active","");
    }

    slides[indice-1].style.display = "block";
    barras[indice-1].classname += "active";
}

/*final*/

