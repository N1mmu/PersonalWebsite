'use strict'

// Pre functions

import songList from './json/songList.json' assert{type: 'json'};


//get jsonData from songList.json


// playlist

var songNo=1;

const song_name_1 = document.getElementById("song_name_1")
const playlist_img_1 = document.getElementById("playlist_img_1")
const play = document.getElementById("song");
const playlist1_playButton = document.getElementById("playButton_p1");
const playlist1_pauseButton = document.getElementById("pauseButton_p1");

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

 const songSelection = function(){
    playlist_img_1.src = songList[songNo].icon;
    song.src = songList[songNo].src;
    song_name_1.innerHTML = songList[songNo].name;

}

// post load function

document.addEventListener("DOMContentLoaded",function(){
    songSelection();
});


