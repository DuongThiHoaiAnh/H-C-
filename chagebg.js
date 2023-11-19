var bg = ['./img/img1.jpeg.jpg','./img/img2.jpeg.jpg','./img/img3.jpeg.jpg']
document.querySelector("#bg1").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[0];
})
document.querySelector("#bg2").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[1];
})
document.querySelector("#bg3").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[2];
})

var audio = ['./music/CanYouHearMyHeartMoonLoversScarletHeartRyoOST-EpikHighLeeHi-4591379.mp3','./music/TungQuen-WrenEvansitsnk-12038297.mp3','./music/Sam_Smith_-_Dancing_With_A_Stranger_(Jesusful.com).mp3']
document.querySelector("#ms1").addEventListener("click",function(){
    document.querySelector("#musiclist audio").src= audio[0];
    document.querySelector("#musiclist audio").play();
})
document.querySelector("#ms2").addEventListener("click",function(){
    document.querySelector("#musiclist audio").src= audio[1];
    document.querySelector("#musiclist audio").play();
})
document.querySelector("#ms3").addEventListener("click",function(){
    document.querySelector("#musiclist audio").src= audio[2];
    document.querySelector("#musiclist audio").play();


})
