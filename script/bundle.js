(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict'
//predeclaration

var i,j,k,playlistNo;

const fs = require('fs');

//json
const songList= require('./songList.json');

//infos that wont change

const noOfSongs = songList.length;
const noOfPlayElements = 12;


// test here

const stringSongList = JSON.stringify(songList);

fs.writeFile("./songListMod.json", stringSongList);







// playlist


const song_name_1 = document.getElementById("song_name_1")
const playlist_img_1 = document.getElementById("playlist_img_1")
const play = document.getElementById("song");
const playlist1_playButton = document.getElementById("playButton_p1");
const playlist1_pauseButton = document.getElementById("pauseButton_p1");


var playlistSongArr=[];
var feedSongArr=[];
var playlistCurrentSongPort=1;
var feedCurrentSongPort=-1;
var currentSong = 0;
var port;
var songNo_click;
var songLoaded_feed=[];
var songAlreadyLoaded=false;



const songChange = function(port,songNo,imgClass,songNameClass){
        let nameElement = document.getElementsByClassName(songNameClass)[port];
        document.getElementsByClassName(imgClass)[port].src = songList[songNo].icon;
        nameElement.innerHTML = songList[songNo].name;
        return songList[songNo].src;

}



const songSelection = function(i,songLoadedList){
        let songNo=Math.floor(Math.random()*noOfSongs);
        while(true){
            for(j=0;j<i;j++){
            if(songLoadedList[j]==songNo){
            songNo=(songNo+1)%noOfSongs;
            break;
            }
        }
        if(j==i) break
    }
    return songNo;

}

// post load function

document.addEventListener("DOMContentLoaded",function(){
    for(i=0;i<13-1;i++){
    songLoaded_feed[i]=songSelection(i,songLoaded_feed);
    feedSongArr[i]=songChange(i,songLoaded_feed[i],'feed_song_image','feed_song_name');
    }
    console.log(songLoaded_feed);

});



const playSong = function(num, playClass,pauseClass,currentSongPort,songListArr){
        document.getElementById('song').src= songListArr[num];
        play.play()
        port = num;
        document.getElementsByClassName(playClass)[num].style.display = "none";
        document.getElementsByClassName(pauseClass)[num].style.display = "block";
}


const clickSong = function(num, playClass,pauseClass,currentSongPort,songListArr){
    if(currentSongPort>=-1 && currentSongPort!=num){
        console.log("played");
        play.pause()
        if(currentSongPort!=-1)
        {
            document.getElementsByClassName(playClass)[currentSongPort].style.display = "block";
        document.getElementsByClassName(pauseClass)[currentSongPort].style.display = "none";
    }
        playSong(num, playClass,pauseClass,currentSongPort,songListArr);
}
else  if (currentSongPort==num){
    console.log("paused");
        play.pause()
        document.getElementsByClassName(playClass)[num].style.display = "block";
        document.getElementsByClassName(pauseClass)[num].style.display = "none";
        currentSong = currentSongPort;
        port=-2;

}else if(currentSongPort==-2){
    console.log("replayed");
    if(currentSong==num){
    play.play()
    document.getElementsByClassName(playClass)[num].style.display = "none";
    document.getElementsByClassName(pauseClass)[num].style.display = "block";
    port=num;
}else{
    playSong(num, playClass,pauseClass,currentSongPort,songListArr);
}
}
}

const endedSong = function(){
    document.getElementsByClassName('feed_play')[feedCurrentSongPort].style.display = "block";
    document.getElementsByClassName('feed_pause')[feedCurrentSongPort].style.display = "none";
    feedCurrentSongPort++;
    let num=feedCurrentSongPort;
    // currentSong = 0;
    playSong(num%noOfPlayElements,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
}


// document.getElementById("song_name_1").addEventListener("click", function(){
//     songNo_click=0;
//     clickSong(0,'play','pause',playlistCurrentSongPort,playlistSongArr);
//     playlistCurrentSongPort = port;
// });
// document.getElementById("song_name_2").addEventListener("click", function(){
//     songNo_click=1;
//     clickSong(1,'play','pause',playlistCurrentSongPort,playlistSongArr);
//     playlistCurrentSongPort = port;
// });
// document.getElementById("song_name_3").addEventListener("click", function(){
//     songNo_click=2;
//     clickSong(2,'play','pause',playlistCurrentSongPort,playlistSongArr);
//     playlistCurrentSongPort = port;
// });
// document.getElementById("song_name_4").addEventListener("click", function(){
//     songNo_click=3;
//     clickSong(3,'play','pause',playlistCurrentSongPort,playlistSongArr);
//     playlistCurrentSongPort = port;
// });
// document.getElementById("song_name_5").addEventListener("click", function(){
//     songNo_click=4;
//     clickSong(4,'play','pause',playlistCurrentSongPort,playlistSongArr);
//     playlistCurrentSongPort = port;
// });
// document.getElementById("song_name_6").addEventListener("click", function(){
//     songNo_click=5;
//     clickSong(5,'play','pause',playlistCurrentSongPort,playlistSongArr);
//     playlistCurrentSongPort = port;
// });
// document.getElementById("song_name_7").addEventListener("click", function(){
//     songNo_click=6;
//     clickSong(6,'play','pause',playlistCurrentSongPort,playlistSongArr);
//     playlistCurrentSongPort = port;
// });

play.addEventListener('ended', function(){
    endedSong();
})


document.getElementsByClassName("feed_song")[0].addEventListener("click", function(){
    songNo_click=0;
    clickSong(0,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[1].addEventListener("click", function(){
    songNo_click=1;
    clickSong(1,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[2].addEventListener("click", function(){
    songNo_click=2;
    clickSong(2,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[3].addEventListener("click", function(){
    songNo_click=3;
    clickSong(3,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[4].addEventListener("click", function(){
    songNo_click=4;
    clickSong(4,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[5].addEventListener("click", function(){
    songNo_click=5;
    clickSong(5,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[6].addEventListener("click", function(){
    songNo_click=6;
    clickSong(6,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[7].addEventListener("click", function(){
    songNo_click=7;
    clickSong(7,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[8].addEventListener("click", function(){
    songNo_click=8;
    clickSong(8,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[9].addEventListener("click", function(){
    songNo_click=9;
    clickSong(9,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[10].addEventListener("click", function(){
    songNo_click=10;
    clickSong(10,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});
document.getElementsByClassName("feed_song")[11].addEventListener("click", function(){
    songNo_click=11;
    clickSong(11,'feed_play','feed_pause',feedCurrentSongPort,feedSongArr);
    feedCurrentSongPort = port;
});


},{"./songList.json":3,"fs":1}],3:[function(require,module,exports){
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
                    "artist": ["The Chainsmokers","Coldplay"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 14,
                    "name": "Changes",
                    "src": "gfx/Musics/Changes.mp3",
                    "icon": "gfx/music icons/Changes.jpg",
                    "genre": "pop",
                    "artist": ["XXXTentacion"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 15,
                    "name": "Way back home",
                    "src": "gfx/Musics/Way back home.mp3",
                    "icon": "gfx/music icons/Way back home.jpg",
                    "genre": "kpop",
                    "artist": ["Shaun"],
                    "language": "korean",
                    "recomendation": 1
                },
                {
                    "song_id": 16,
                    "name": "Memories",
                    "src": "gfx/Musics/Memories.mp3",
                    "icon": "gfx/music icons/Memories.jpg",
                    "genre": "pop",
                    "artist": ["Maroon 5"],
                    "language": "english",
                    "recomendation": 1
                },
                {
                    "song_id": 17,
                    "name": "Stay with me",
                    "src": "gfx/Musics/Stay with me.mp3",
                    "icon": "gfx/music icons/Stay with me.jpg",
                    "genre": "kpop",
                    "artist": ["Chanyeol","EXO"],
                    "language": "korean",
                    "recomendation": 1
                }
                
]

},{}]},{},[2]);
