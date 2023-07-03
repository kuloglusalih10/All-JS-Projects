const ekran = document.getElementById("screen");
const adet = document.getElementById("count");
const fiyat = document.getElementById("amount");
const movieList = document.getElementById("movie");


ekran.addEventListener("click", rezervasyon);

movieList.addEventListener("change", movieChange);

function movieChange(){

    calculateTotal();
}




function rezervasyon (e){


    
    if(e.target.classList.contains("selected")){

        e.target.className = "seat";
    }
    else if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved"))
    {
        e.target.className = "seat selected";    
    }
    calculateTotal();

}

function calculateTotal(){
    let selectedSeatCount = document.querySelectorAll('.seat.selected').length-1;
    let price = movieList.value;
    adet.innerText = selectedSeatCount;
    fiyat.innerText= price * selectedSeatCount; 
    
}