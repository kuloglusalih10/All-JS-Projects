const openButton = document.getElementById("btnOpen");
const crossButton = document.getElementById("cros");
const mainModal = document.getElementById("main");
const hiddenModal = document.getElementById("hidden");

eventListeners();

function eventListeners(){
    openButton.addEventListener("click", goster);
    crossButton.addEventListener("click", kapat);

}

function goster(){
    mainModal.style.display = "none";
    hiddenModal.style.display = "flex";
}

function kapat()
{
    mainModal.style.display = "flex";
    hiddenModal.style.display = "none";
}
