let song =document.getElementById("mockingBird");
let btn=document.getElementById("btn");
let btn1=document.getElementById("btn1");
let btn2= document.getElementById("btn2");
let btn3= document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let disc=document.getElementById("con2");
let rotation=0;
btn1.onclick= ()=>{
    song.play();
  
   
}
btn.onclick= ()=>{
    song.pause();
    
}
btn2.onclick= () =>{
    if(song.volume <1){
        song.volume += 0.1;
    }
}
btn3.onclick= ()=>{
    if(song.volume>0.1){
        song.volume -=0.1;
    }
}
btn4.onclick = ()=>{
    if(song.volume<=1 && song.volume>0.1){
        song.volume = 0;
    }
}
btn5.onclick = ()=>{
    if(song.volume===0){
        song.volume =1;
    }
}