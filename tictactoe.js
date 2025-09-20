
let boxes = document.querySelectorAll('.box');
let rstgame = document.querySelector('#B1');
let container1=document.querySelector('.container1')
let turn0 = true;
let mssg=document.querySelector('#mssg')
let strtgame = document.querySelector('#B2');
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



const disableBoxes = () => {
    boxes.forEach((box) => box.disabled = true);
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        container1.classList.add('hide')
        turn0=true;
    }
}
 const startgame=()=>{
    enableboxes();

 }

const callwinner=(winner)=>{
    mssg.innerText=`congratultions the winner is ${winner}`;
    container1.classList.remove("hide");
      disableBoxes();
 }

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box has been clicked');
        if (turn0) {
            
            box.innerText = 'O';
            turn0 = false;
            box.style.color = 'pink'; 
        } else {
            box.innerText = 'X';
            turn0 = true;
            box.style.color = 'black'; 
        }
        box.disabled = true; //  boolean
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winpattern) { // ✅ use let
        let pos0 = boxes[pattern[0]].innerText; // ✅ capital T
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;

        if (pos0 !== "" && pos1 !== "" && pos2 !== "") { // ✅ fixed condition
            if (pos0 === pos1 && pos1 === pos2) {
                console.log('Winner:', pos0);
                 callwinner(pos0);
            }
             
               
        }
             

    }
 
};

strtgame.addEventListener('click',startgame);
rstgame.addEventListener('click',startgame);


 





