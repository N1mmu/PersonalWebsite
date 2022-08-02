'use strict'


// playlist
const playlist_image_1 = document.getElementById("playlist_img_1")
const play = document.getElementById("song");
const playlist1_playButton = document.getElementById("playButton_p1");
const playlist1_pauseButton = document.getElementById("pauseButton_p1")

var memPlaying_p1=0;

const clickSong = function(){
    if(memPlaying_p1==0){
    play.play()
    memPlaying_p1=1;
    playlist1_playButton.style.display = "none";
    playlist1_pauseButton.style.display = "block";
}
    else{
    play.pause()
    memPlaying_p1=0;
    playlist1_playButton.style.display = "block";
    playlist1_pauseButton.style.display = "none";
}
    
}

const endedSong = function(){
    memPlaying_p1=0;
    playlist1_playButton.style.display = "block";
    playlist1_pauseButton.style.display = "none";
}