
let boxText = document.getElementsByClassName(".boxtext");
let turnAudio = new Audio('ting.mp3');
let music = new Audio("music.mp3");
let gameOverMusic = new Audio ('gameover.mp3');
let turn = 'X';
let gameOver = false;

// background music
// document.addEventListener('click', () => {
//     music.play();
// });

const changeTurn = () =>{
    if(turn==='X'){
        return 'O';
    }
    else{
        return 'X';
    }
}


const checkWin = () => {
   let boxText = document.getElementsByClassName("boxtext");
   let win =[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
   ]

   win.forEach(e => {
    if((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[1]].innerHTML === boxText[e[2]].innerHTML) && (boxText[e[0]].innerHTML !== '')){
       
        document.querySelector(".gameInfo").innerHTML = boxText[e[0]].innerHTML + " Won";
        gameOver = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
        document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        document.querySelector(".line").style.width = "20vw";
        
    }
   })
}



let boxes = Array.from(document.getElementsByClassName("box"));
boxes.forEach(Element => {
   let boxtext = Element.querySelector('.boxtext')
    Element.addEventListener('click', () => {
        if(boxtext.innerHTML === ''){
           boxtext.innerHTML = turn;
           turn = changeTurn();
           turnAudio.play();
           checkWin();
        
           if(!gameOver){
            document.getElementsByClassName("gameInfo")[0].innerHTML = "Turn for " + turn;
           }
           else{ gameOverMusic.play();}
    }
        
    }); 
    
})

// reset button
let reset = document.getElementById("reset");
reset.addEventListener('click', () =>{
   let boxText = Array.from(document.querySelectorAll(".boxtext"));
    boxText.forEach(e =>{
        e.innerHTML = '';
    });
   
    turn = 'X';
    gameOver = false;
    document.getElementsByClassName("gameInfo")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0';
    document.querySelector(".line").style.width = "0vw";  
})



// music and mute button
let played = false;
let mute = document.getElementById("mute");
mute.addEventListener('click', () =>{
       if(played === false) {
          music.pause();
          played = true;
       }
       else{
        music.play();
        played =  false;
       }
});

document.body.addEventListener('mouseover', () => {
    music.play()
})