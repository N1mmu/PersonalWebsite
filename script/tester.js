'use strict'

// memory
var memFont = 0;
var memColor= 0;
var memHide= 0;
var memLock=0;

// stores the changeable element object
const obj = document.getElementById("test");
const buttonLocked = document.getElementById("test_buttons_disabled");
const buttonUnlocked = document.getElementById("test_buttons");

const font = function(){
    console.log("font changed "+ ++memFont+" times");
    if(memFont%2==0)
    obj.style.fontFamily = "Lucida Console";
    else
    obj.style.fontFamily = "Copperplate";
}

const color = function(){
    console.log("color changed " + ++memColor +" times");
    switch(memColor%7){
        case 0:
            obj.style.color = "#9400D3";
            break;
        case 1:
            obj.style.color = "#4B0082";
            break;
        case 2:
            obj.style.color = "#0000FF";
            break;
        case 3:
            obj.style.color = "#00FF00";
            break;
        case 4:
            obj.style.color = "#FFFF00";
            break;
        case 5:
            obj.style.color = "#FF7F00";
            break;
        case 6:
            obj.style.color = "#FF0000";
            break;                         
    }
}

const hide = function(){
    if(memHide== 0){
        obj.style.display = "none";
        console.log("the content has been hidden");
        memHide=1;
    }
    else{
        obj.style.display = "block";
        console.log("the content has been shown");
        memHide=0;
    }
}

const lock = function(){
    if (memLock==0){
        buttonLocked.style.display = "flex";
        buttonUnlocked.style.display="none";
        memLock=1;
    }else{
        buttonLocked.style.display = "none";
        buttonUnlocked.style.display="flex";
        memLock=0;
    }
}

const reset = function(){
    buttonLocked.style.display = "none";
    buttonUnlocked.style.display="flex";
    memLock=0;
    obj.style.color = "#993A79";
    memColor=0;
    obj.style.fontFamily = "Georgia";
    memFont=0;
    obj.style.display = "block";
    memHide=0;  
    console.log("reset sucessful");  
}