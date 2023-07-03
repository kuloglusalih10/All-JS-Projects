


const video = document.getElementById("video");
const buton = document.getElementById("buton");

buton.addEventListener("click", playVideo);

function playVideo(){
    if(video.paused)
    {
        video.play();
        buton.innerHTML="Pause";
    }
    else{
        video.pause(); 
        buton.innerHTML= "Play";
    }
}