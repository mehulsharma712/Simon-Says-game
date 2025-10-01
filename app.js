let gameSeq=[];
let userSeq=[];


let btns=["yellow","red","blue","green"];

let started=false;
let Level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game is started")
        started=true;
        levelup();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout (function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout (function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelup(){
    userSeq=[];
    Level++;
    h2.innerText=`Level ${Level}`

    //choosing random button to flash
    let randIndx=Math.floor(Math.random()*3);
    let randClr=btns[randIndx];
    let randBtn=document.querySelector(`.${randClr}`)
    
    gameSeq.push(randClr);
    console.log(gameSeq);
    gameFlash(randBtn );
}

function checkAns(idx){
    // console.log("Current level:",Level);

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game over👎!Your score was ${Level} </br> <br> Press any key to start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    Level=0;
}