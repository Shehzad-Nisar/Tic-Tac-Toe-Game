let btn = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-game");
let msg_container = document.querySelector(".msg-container");
let winnerMsg = document.querySelector("#winner")

let playerO = true; //playerO , playerX

const resetFunc = () => {
    playerO = true;
    btnenable();
    msg_container.classList.add("hide");
}


//enable buttons after click reset button:
// const btnenable = () => {
// btn.forEach(box => {
//     box.disabled = false;
//     btn.innerText = "";
// // });

// }

const btnenable = () => {
  btn.forEach(box => {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("win");
  });
};

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [6,4,2],
    [0,4,8],
]


btn.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click");
        if(playerO){
            box.innerText = "O";
            playerO = false;
        }else {
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;

        checkWinner();
        
    })
})


const btnDisable = () => {
   btn.forEach(box => box.disabled = true);
}
const winnerState = (winner) =>{
    winnerMsg.innerText = `Congratulations!!!, winner is '${winner}' player.`;
    msg_container.classList.remove("hide");
    btnDisable();

}



const checkWinner= ()=> {
    for(let patterns of winPattern){
       let pos1val = btn[patterns[0]].innerText;
       let pos2val = btn[patterns[1]].innerText;
       let pos3val = btn[patterns[2]].innerText;

       if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            winnerState(pos1val);
        }
       }
    }

}

newgamebtn.addEventListener("click",()=>{
    resetFunc();
})
resetBtn.addEventListener("click",()=>{
    resetFunc();
})