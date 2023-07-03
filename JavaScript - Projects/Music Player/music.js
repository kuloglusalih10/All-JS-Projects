class Music{
    constructor(tittle,singer,img,file){
        this.tittle = tittle;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.tittle + " - "+this.singer;
    }

}

const musicList = [

    new Music("İncir","İlyas Yalçıntaş","ilyas.jpg","ilyas.mp3"),
    new Music("Holocaust","Ceza","ceza.jpg","ceza.mp3"),
    new Music("Cennet","Ebru Gündeş","ebru.jpg","ebru.mp3"),

];