let models =[
     {
        name : "deneme 1",
        Image: "2.jpg",
        link : "https://www.bing.com/translator" 
     },
     {
        name : "deneme 2",
        Image: "3.jpg",
        link : "https://www.bing.com/translator" 
     },
     {
        name : "deneme 3",
        Image: "5.jpg",
        link : "https://www.bing.com/translator" 
     },

];

let index = 0;
let interval;

let settings = {
    duration: "2000",
    random : "true"
}

init(settings);

function init(setting){
   interval = setInterval(function (){

        if(setting.random == "true"){
            index = Math.floor(Math.random() * models.length);
            showIndex(index);
        }
        else{
            next.click();
        }

    },2000);
}


function showIndex (index){

    document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute('src', models[index].Image);

    document.querySelector(".card-link").setAttribute("href", models[index].link);


}




const prev = document.getElementById("prev");
const next = document.getElementById("next");


document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseover",function(){
        clearInterval(interval);
    })
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseout",function(){
        init(settings);
    })
});



prev.addEventListener("click", geri);
next.addEventListener("click", ileri);


function geri (){
    if(index == 0){
        index = models.length-1;
    }
    else{
        index -=1;
    }
   showIndex(index);
    
}

function ileri (){
    if(index == models.length-1)
    {
        index = 0;

    }
    else{
        index +=1;
    }
    showIndex(index);
}
