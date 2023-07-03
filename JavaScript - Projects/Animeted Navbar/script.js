const buton = document.getElementById("myNavButton");
const links = document.getElementById("links");
const nav = document.getElementById("nav");

buton.addEventListener("click", openLinks);
let isOpen = true;

function openLinks (){
   

    if(isOpen){
        
        links.className ="myLinksOpen";
        isOpen = false;
    }
    else
    {
        links.className ="myLinks";
        isOpen = true;
    }
}