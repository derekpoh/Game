/*----- constants -----*/


/*----- state variables -----*/
const number = [
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
]
;
const cover = [                                   
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
];

const totalSquareCount = 80;

const bombNumber = 10;

/*----- cached elements  -----*/
const boardBodyNum = document.querySelector(".number");
const boardBodyCover = document.querySelector(".cover");


/*----- event listeners -----*/
const clickCover = (i,j) => () => {
    if (number[i][j] === 9) {
        cover[i][j] = 1;
        console.log("GAME OVER");
    }
    else {
    cover[i][j] = 1;
    };
    checkWin();
    renderAll()
}

const checkWin = () => {
    let totalUncovered = 0;
    for(let i=0; i<cover.length; i++) {
        for(let j=0; j<cover[i].length; j++) {
            if (cover[i][j] === 1) {
                totalUncovered++;
            }
        }
    }
    if (totalUncovered === totalSquareCount - bombNumber) {
        console.log("Win");
    }
}

    
/*----- functions -----*/

const renderBomb = () => {
    for (let i=0; i<bombNumber; i++) {
        number[Math.floor(Math.random() * 8)][Math.floor(Math.random() * 10)] = 9;               //Add unique number generator
    };
    renderAll();
}

const renderBoardNum = () => {
    boardBodyNum.textContent = "";
    for(let i=0; i<number.length; i++)
     {
        const boardNumTr = document.createElement("tr");
        for(let j=0; j<number[i].length; j++)
        {
            const boardNumTd = document.createElement("td");
            boardNumTd.innerText = number[i][j];
            boardNumTr.append(boardNumTd);
        }
        boardBodyNum.append(boardNumTr);
    }
}

const renderBoardCover = () => {
    boardBodyCover.textContent = "";
    for(let i=0; i<cover.length; i++)
    {
        const boardCoverTr = document.createElement("tr");
        for(let j=0; j<cover[i].length; j++)
        {
            const boardCoverTd = document.createElement("td");
            boardCoverTd.innerText = cover[i][j];
            boardCoverTd.addEventListener("click", clickCover(i,j));
            boardCoverTr.append(boardCoverTd);
            if (cover[i][j] === 1) {
                boardCoverTd.style.opacity = "0";
            }
        }
        boardBodyCover.append(boardCoverTr);
    }
}


const renderAll = () => {
    renderBoardCover();
    renderBoardNum();
}

const main = () => {
    renderBomb();
    renderAll();
}
main()