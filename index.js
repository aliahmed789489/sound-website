var playBtn = document.querySelector(".play-btn")
playBtn.addEventListener("click",function(){
    var song = new Audio("crash.mp3");
    if(song.pause){
        song.play();
        playBtn.src = "images/pause.png";
        
    }else{
        song.pause();
        playBtn.src = "images/play.png";
    }
		
        


})
