var x = document.getElementById("songs");
function playAudio(){
  x.play();
}
function pauseAudio(){
  x.pause();
}

/*var audio =[];
audio[0] = new Audio("https://cdn.glitch.com/f6e4e4dc-8518-4a0a-992d-8c0e8d67c0da%2Fdontstopbelievin.mp3?v=1595730965054");
audio[1] = new Audio("https://cdn.glitch.com/f6e4e4dc-8518-4a0a-992d-8c0e8d67c0da%2Ftaintedlove.mp3?v=1595783279180");
audio[2] = new Audio("https://cdn.glitch.com/f6e4e4dc-8518-4a0a-992d-8c0e8d67c0da%2Feverylittlething.mp3?v=1595783286423");

var i;
var x = document.getElementsByClassName("sounds");
for(i=0; i<audio.length(); i++){
  if(x<audio.length()){
    function playAudio(){
      audio[x].play();
    }
  }
  else if(x>audio.length()){
    x = 0;
    audio[x].play();
  }
}
 /*   $(".click").click(function(){
  if (i< audio.length){
     audio[i].play();
     i++;
  } else if ( i>audio.length){
     i = 0;
     audio[i].play();
  };
});*/
  