const image = document.querySelector("#image");
const audio = document.querySelector("#audio");
const musicTittle = document.querySelector("#musicTittle");
const musicSinger = document.querySelector("#musicSinger");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");

const currentTime = document.querySelector("#current-time");
const durationTime = document.querySelector("#duration-time");

const bar = document.querySelector("#progress-bar");

const volume = document.querySelector("#volume");
const barValume = document.querySelector("#progress-bar-volume");





const player = new Player(musicList);



window.addEventListener("load",() => {

    let music = player.getMusic();

    displayMusic(music);
})

function displayMusic(music){
    musicTittle.innerText = music.getName();
    musicSinger.innerText = music.singer;
    audio.src ="music/"+ music.file;
    image.src ="img/"+ music.img;
    
}

play.addEventListener("click", () =>{
    if(audio.classList.contains("playing")){

        audio.classList.remove("playing");
        play.classList = "fa-solid fa-play"
        audio.pause();
    }
    else{

        play.classList = "fa-solid fa-pause"
        audio.classList.add("playing");
        audio.play();
    }
    
})

next.addEventListener("click", () =>{
    
    play.classList = "fa-solid fa-pause"
    audio.classList.add("playing");
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    audio.play();

})

prev.addEventListener("click",()=>{

    play.classList = "fa-solid fa-pause"
    audio.classList.add("playing");
    player.previous();
    let music = player.getMusic();
    displayMusic(music);    
    audio.play();
    
})

function calculateTime (toplamsaniye){
    const dakika = Math.floor(toplamsaniye / 60);
    const saniye = Math.floor(toplamsaniye % 60);

    const güncellenenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`;
    const sonuc = `${dakika}:${güncellenenSaniye}`;

    return sonuc;
}


audio.addEventListener("loadedmetadata",() => {

    durationTime.textContent = calculateTime(audio.duration);
    bar.max = Math.floor(audio.duration);   

})


audio.addEventListener("timeupdate", () => {
    
    bar.value =  Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(bar.value);
})

bar.addEventListener("input", ()=>{
    currentTime.textContent = calculateTime(bar.value);
    audio.currentTime = bar.value;
})

let muteState = "sesli";


volume.addEventListener("click", ()=>{
    if(muteState == "sesli"){

        volume.classList = "fa-solid fa-volume-xmark";
        audio.muted= true;
        muteState = "sessiz";
        barValume.value =0;
        audio.volume = value / 100;

    }
    else{

        volume.classList = "fa-solid fa-volume-high";
        audio.muted= false;
        muteState = "sesli";
        barValume.value = 100;
        audio.volume = value / 100;
    }
})

barValume.addEventListener("input", (e) => {

    const value = e.target.value;
    

    if(value == 0){
        audio.muted= true;
        muteState = "sessiz"
        volume.classList = "fa-solid fa-volume-xmark";
        audio.volume = value / 100;
    }
    else{

        audio.volume = value / 100;
        volume.classList = "fa-solid fa-volume-high";
        muteState = "sesli"
        audio.muted= false;  
         
    }
    
})

