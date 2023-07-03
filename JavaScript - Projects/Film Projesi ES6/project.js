





const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");



// Tüm Eventleri Yükleme

eventListener();

function eventListener(){
    
    form.addEventListener("submit", addFilm);

    document.addEventListener("DOMContentLoaded", function (){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click", clearAllFilms);
    
    
}


function addFilm(e){    // e Event objesi
    const title = titleElement.value;
    const director = directorElement.value;
    const url= urlElement.value;

    if(title === "" || director === "" || url === "")
    {
        UI.displayMessages("Tüm Alanları Doldrun...", "danger");

    }
    else
    {
        const newFilm = new Film(title, director, url);
        
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film Başarıyla EKlendi...", "success");
        

    }
    UI.clearInputs(titleElement, directorElement,urlElement);
    


    e.preventDefault();
}

function deleteFilm (e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
    
    }
}
function clearAllFilms(){

    if(confirm("Emin misiniz ?"))
    {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }

   

}