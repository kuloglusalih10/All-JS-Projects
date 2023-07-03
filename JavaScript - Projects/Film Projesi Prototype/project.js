const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");



// UI Objesini Başlatma

const ui = new UI();

// Storage Objesini Başlatma

const storage = new Storage();

// Tüm Eventleri Yükleme

eventListener();

function eventListener(){
    
    form.addEventListener("submit", addFilm);

    document.addEventListener("DOMContentLoaded", function (){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Tüm Alanları Doldrun...", "danger");

    }
    else
    {
        const newFilm = new Film(title, director, url);
        
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Film Başarıyla EKlendi...", "success");
        

    }
    ui.clearInputs(titleElement, directorElement,urlElement);
    


    e.preventDefault();
}

function deleteFilm (e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
    
    }
}
function clearAllFilms(){

    if(confirm("Emin misiniz ?"))
    {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }

   

}