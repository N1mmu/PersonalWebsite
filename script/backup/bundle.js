(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./songList.json":2}],2:[function(require,module,exports){
module.exports=[
    {
        "song_id": 1,
    "name": "Faded",
    "src": "gfx/Musics/Faded.mp3",
    "icon": "gfx/music icons/Faded.jpg",
    "genre": "pop",
    "artist": ["Alan Walker"],
    "language": "english",
    "recomendation": 1
        },
    {
        "song_id": 2,
        "name": "Alone",
        "src": "gfx/Musics/Alone.mp3",
        "icon": "gfx/music icons/Alone.png",
        "genre": "pop",
        "artist": ["Alan Walker"],
        "language": "english",
        "recomendation": 1
        },
        {
            "song_id": 3,
            "name": "On my way",
            "src": "gfx/Musics/On my way.mp3",
            "icon": "gfx/music icons/On_My_Way.png",
            "genre": "pop",
            "artist": ["Alan Walker"],
            "language": "english",
            "recomendation": 1
        },
            {
                "song_id": 4,
                "name": "The Spectre",
                "src": "gfx/Musics/The Spectre.mp3",
                "icon": "gfx/music icons/The Spectre.jpg",
                "genre": "pop",
                "artist": ["Alan Walker"],
                "language": "english",
                "recomendation": 1
                },
                {
                    "song_id": 5,
                    "name": "Attention",
                    "src": "gfx/Musics/Attention.mp3",
                    "icon": "gfx/music icons/attention.jpg",
                    "genre": "pop",
                    "artist": ["Charlie Puth"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 6,
                    "name": "See you again",
                    "src": "gfx/Musics/See You Again.mp3",
                    "icon": "gfx/music icons/See You Again.png",
                    "genre": "pop",
                    "artist": ["Charlie Puth","Wiz Khalifa"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 7,
                    "name": "Heroes Tonight",
                    "src": "gfx/Musics/Heroes Tonight.mp3",
                    "icon": "gfx/music icons/Heroes Tonight.jpg",
                    "genre": "pop",
                    "artist": ["Janji","Johnning"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 8,
                    "name": "Close to the sun",
                    "src": "gfx/Musics/Close To The Sun.mp3",
                    "icon": "gfx/music icons/Close To The Sun.jpg",
                    "genre": "pop",
                    "artist": ["TheFatRat","Anjulie"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 9,
                    "name": "Rise",
                    "src": "gfx/Musics/Rise.mp3",
                    "icon": "gfx/music icons/Rise.jpg",
                    "genre": "pop",
                    "artist": ["League Of Legends"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 10,
                    "name": "On & On",
                    "src": "gfx/Musics/On & On.mp3",
                    "icon": "gfx/music icons/On & On.jpg",
                    "genre": "pop",
                    "artist": ["Cartoon"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 11,
                    "name": "Hymn For The Weekend",
                    "src": "gfx/Musics/Hymn For The Weekend.mp3",
                    "icon": "gfx/music icons/Hymn For The Weekend.jpg",
                    "genre": "pop",
                    "artist": ["Coldplay"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 12,
                    "name": "Cradles",
                    "src": "gfx/Musics/Cradles.mp3",
                    "icon": "gfx/music icons/Cradles.jpg",
                    "genre": "pop",
                    "artist": ["Suburban"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 13,
                    "name": "Something Just Like This",
                    "src": "gfx/Musics/Something Just Like This.mp3",
                    "icon": "gfx/music icons/Something Just Like This.png",
                    "genre": "pop",
                    "artist": ["Suburban"],
                    "language": "english",
                    "recomendation": 1
                }
                
]

},{}]},{},[1]);
