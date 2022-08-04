'use strict'
//predeclaration

var i,j,k,playlistNo;


//json
const songList= require('./songList.json');
// console.log(songList);

//infos that wont change

const noOfSongs = songList.length;
const noOfPlayElements = 7;

// playlist


const song_name_1 = document.getElementById("song_name_1")
const playlist_img_1 = document.getElementById("playlist_img_1")
const play = document.getElementById("song");
const playlist1_playButton = document.getElementById("playButton_p1");
const playlist1_pauseButton = document.getElementById("pauseButton_p1");


var songPathPlaylist=[];
var currentSongPort=1;
var currentSong = 0;
var songNo_click;
var songLoaded_playlist=[];
var songAlreadyLoaded=false;


const songChange = function(loc,songNo){
    songLoaded_playlist[loc]=songNo;
        document.getElementsByClassName('playlist_img')[loc].src = songList[songNo].icon;
        songPathPlaylist[loc]= songList[songNo].src;
        document.getElementsByClassName('song_name')[loc].innerHTML = songList[songNo].name;
}



const songSelection = function(){
    for(i=0;i<noOfPlayElements;i++){
        var songNo=Math.floor(Math.random()*noOfSongs);
        while(true){
            for(j=0;j<i;j++){
            if(songLoaded_playlist[j]==songNo){
            songNo=(songNo+1)%noOfSongs;
            break;
            }
        
        }
        if(j==i) break
    }
        songChange(i,songNo);
    }

}

// post load function

document.addEventListener("DOMContentLoaded",function(){
    songSelection();
});


const playSong = function(num){
    document.getElementById('song').src= songPathPlaylist[num];
        play.play()
        currentSongPort = num;
        document.getElementsByClassName('play')[num].style.display = "none";
        document.getElementsByClassName('pause')[num].style.display = "block";
}


const clickSong = function(num){
    if(currentSongPort>=0 && currentSongPort!=num){
        play.pause()
        document.getElementsByClassName('play')[currentSongPort].style.display = "block";
        document.getElementsByClassName('pause')[currentSongPort].style.display = "none";
        playSong(num);
}
else  if (currentSongPort==num){
    // console.log("paused");
        play.pause()
        document.getElementsByClassName('play')[num].style.display = "block";
        document.getElementsByClassName('pause')[num].style.display = "none";
        currentSong = currentSongPort;
        currentSongPort=-1;

}else if(currentSongPort==-1){
    // console.log("replayed");
    if(currentSong==num){
    play.play()
    document.getElementsByClassName('play')[num].style.display = "none";
    document.getElementsByClassName('pause')[num].style.display = "block";
    currentSongPort=num;
}else{
    playSong(num);
}
}
}

const endedSong = function(){
    document.getElementsByClassName('play')[currentSongPort].style.display = "block";
    document.getElementsByClassName('pause')[currentSongPort].style.display = "none";
    let num=currentSongPort;
    // currentSong = 0;
    playSong((num+1)%noOfPlayElements);
}

document.getElementById("song_name_1").addEventListener("click", function(){
    songNo_click=0;
    clickSong(0);
});
document.getElementById("song_name_2").addEventListener("click", function(){
    songNo_click=1;
    clickSong(1);
});
document.getElementById("song_name_3").addEventListener("click", function(){
    songNo_click=2;
    clickSong(2);
});
document.getElementById("song_name_4").addEventListener("click", function(){
    songNo_click=3;
    clickSong(3);
});
document.getElementById("song_name_5").addEventListener("click", function(){
    songNo_click=4;
    clickSong(4)
});
document.getElementById("song_name_6").addEventListener("click", function(){
    songNo_click=5;
    clickSong(5)
});
document.getElementById("song_name_7").addEventListener("click", function(){
    songNo_click=6;
    clickSong(6)
});

play.addEventListener('ended', function(){
    endedSong();
})