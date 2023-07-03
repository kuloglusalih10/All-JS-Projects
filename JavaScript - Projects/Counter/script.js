const artır = document.getElementById("btnArtır");
const azalt = document.getElementById("btnAzalt");
const sıfırla = document.getElementById("btnSıfırla");
const sayac = document.getElementById("sayac");
const butons = document.getElementById("btnGroup");

let say = 0;

butons.addEventListener("click", sayacDegis);


function sayacDegis(e) {

    if (e.target.id === "btnArtır") {
        say++;
        sayac.innerHTML = say;
        if (say > 0) {
            sayac.style.color = "green"
        }

    }
    if (e.target.id === "btnAzalt") {
        say--;
        sayac.innerHTML = say;
        if (say < 0) {
            sayac.style.color = "red"
        }
    }
    if (e.target.id === "btnSıfırla") {
        say = 0;
        sayac.innerHTML = say;

    }
    if (say == 0) {
        sayac.style.color = "black"
    }


}