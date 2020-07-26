/*var x = document.getElementById("songs");
function playAudio(){
  x.play();
}
function pauseAudio(){
  x.pause();
}*/

/*var song1 = $("#sound-1");
var song2 = $("#sound-2");
var song3 = $("#sound-3");
/*var song4 = $("#sound-4");
var song5 = $("#sound-5");
var song6 = $("#sound-6");
var song7 = $("#sound-7");
var song8 = $("#sound-8");

var audioArray = [ song1, song2, song3 ];
var i=0;
$(".click").click(function(){
  if (i< audioArray.length){
     audioArray[i].trigger('play');
     i++;
  } else if ( i>audioArray.length){
     i = 0;
     audioArray[i].trigger('play');
  };
});*/

var audio =[];
audio[0] = new Audio("https://cdn.glitch.com/f6e4e4dc-8518-4a0a-992d-8c0e8d67c0da%2Fdontstopbelievin.mp3?v=1595730965054");
audio[1] = new Audio("https://cdn.glitch.com/f6e4e4dc-8518-4a0a-992d-8c0e8d67c0da%2Ftaintedlove.mp3?v=1595783279180");
audio[2] = new Audio("https://cdn.glitch.com/f6e4e4dc-8518-4a0a-992d-8c0e8d67c0da%2Feverylittlething.mp3?v=1595783286423");
var i;
for(i=0; i<audio.length; i++){
  audio[i].play(
}