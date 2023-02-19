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

const flagNumber = 10;
    
/*----- cached elements  -----*/
const boardBodyNum = document.querySelector(".number");
const boardBodyCover = document.querySelector(".cover");
const gameOutput = document.querySelector("output");
    
    
/*----- event listeners -----*/

const clickFlag = (i,j) => (event) => {                                                                                    //Places a flag on potential mine square
    event.preventDefault();                                                                                                //Square "1" to denote square is flagged
    if(cover[i][j] === "0") return;
    if(cover[i][j] === "1") {
        cover[i][j] = number[i][j];
        renderAll();
        return;
    }
    let flagPlaced = 0;
    for(let i=0; i<cover.length; i++) {
        for(let j=0; j<cover[i].length; j++) {
            if (cover[i][j] === "1") {
                flagPlaced++;
            }
        }
    }
    if (flagPlaced === flagNumber) return;
    cover[i][j] = "1";
    renderAll();
}

const clickCover = (i,j) => () => {                                                                                       //Uncovers clicked square and activates flood mechanism
    if(cover[i][j] === "0") return;                                                                                       //String "0" to denote uncovered square
    if(cover[i][j] === "1") return;
    if (number[i][j] === 9) {
            cover[i][j] = "0";
            gameOver();
        }
        else {
            floodAll(i,j)
            cover[i][j] = "0";
            renderAll();
        };
        checkWin();
        renderAll()
    }
    
const checkWin = () => {
        let totalUncovered = 0;
        for(let i=0; i<cover.length; i++) {
            for(let j=0; j<cover[i].length; j++) {
                if (cover[i][j] === "0") {
                    totalUncovered++;
                }
            }
        }
        if (totalUncovered === totalSquareCount - bombNumber) {
            renderWin();
        }
    }
    
const gameOver = () => {
    for(let i=0; i<cover.length; i++) {
        for(let j=0; j<cover[i].length; j++) {
            cover[i][j] = "0";
            renderGameOver();
            renderAll();
        }
    }
}

const easyGame = () => {
    main();
}

const resetGame = () => {
    for(let i=0; i<cover.length; i++) {
        for(let j=0; j<cover[i].length; j++) {
            cover[i][j] = 0;
            number[i][j] = 0;
        }
    }
    main();
}
        
    /*----- functions -----*/

    const floodAll = (i,j) => {                                                                                           //Flood mechanism
        let flood = parseInt(cover[i][j]);
        if (flood !== 0) {
            flood = "0";
            return;
        }
        floodLeft(i,j);
        floodUp(i,j);
        floodRight(i,j);
        floodDown(i,j);
        flood = "0";
        renderAll();
    }
    
    const floodLeft = (i,j) => {
        if (j-1 < 0) return;
        if (cover[i][j-1] !== 0) {
            cover[i][j-1] = "0";
            return;
        }
        cover[i][j-1] = "0";
        floodAll(i,j-1);
    }
    
    const floodUp = (i,j) => {
        if (i-1 < 0) return;
        if (cover[i-1][j] !== 0) {
            cover[i-1][j] = "0"; 
            return;}      
        cover[i-1][j] = "0";                                  
        floodAll(i-1,j);
    }
    
    const floodRight = (i,j) => {
        if (j+1 > cover[i].length-1) return;
        if (cover[i][j+1] !== 0) {
            cover[i][j+1] = "0";
            return;}
        cover[i][j+1] = "0";
        floodAll(i,j+1);
    }
    
    const floodDown = (i,j) => {
        if (i+1 > cover.length-1) return;
        if (cover[i+1][j] !== 0) {
            cover[i+1][j] = "0";
            return;}
        cover[i+1][j] = "0";
        floodAll(i+1,j)
    }
    
const renderNumberBoard1 = (i,j) => {                                                                                //Search diagonal (up,left)
            if (number[i][j] === 9) return 1;
            if (i-1 < 0) return 0;
            if (j-1 < 0) return 0;
            number[i][j] = 0;
            if (number[i-1][j-1] === 9) {
                number[i][j] ++
            };
            return number[i][j]
        }
        
const renderNumberBoard2 = (i,j) => {                                                                                //Search vertical (up)
            if (number[i][j] === 9) return 1;
            if (i-1 < 0) return 0;
            number[i][j] = 0;
            if (number[i-1][j] === 9) {
                number[i][j] ++
            };
            return number[i][j]
        }

const renderNumberBoard3 = (i,j) => {                                                                                //Search diagonal (up,right)
            if (number[i][j] === 9) return 1;
            if (i-1 < 0) return 0;
            if (j+1 > number[i].length-1) return 0;
            number[i][j] = 0;
            if (number[i-1][j+1] === 9) {
                number[i][j] ++
            };
            return number[i][j]
        }

const renderNumberBoard4 = (i,j) => {                                                                                //Search horizontal (left)
            if (number[i][j] === 9) return 1;
            if (j-1 < 0) return 0;
            number[i][j] = 0;
            if (number[i][j-1] === 9) {
                number[i][j] ++
            };
            return number[i][j]
        }

const renderNumberBoard5 = (i,j) => {                                                                                //Search horizontal (right)
            if (number[i][j] === 9) return 1;
            if (j+1 > number[i].length-1) return 0;
            number[i][j] = 0;
            if (number[i][j+1] === 9) {
                number[i][j] ++
            };
            return number[i][j]
        }
 
const renderNumberBoard6 = (i,j) => {                                                                                //Search diagonal (down,left)
            if (number[i][j] === 9) return 1;
            if (i+1 > number.length-1) return 0;
            if (j-1 < 0) return 0;
            number[i][j] = 0;
            if (number[i+1][j-1] === 9) {
                number[i][j] ++
            };
            return number[i][j]
        }
 
const renderNumberBoard7 = (i,j) => {                                                                                //Search vertical (down)
            if (number[i][j] === 9) return 1;
            if (i+1 > number.length-1) return 0;
            number[i][j] = 0;
            if (number[i+1][j] === 9) {
                number[i][j] ++
            };
            return number[i][j]
        }

const renderNumberBoard8 = (i,j) => {                                                                                //Search diagonal (down,right)
            if (number[i][j] === 9) return 2;
            if (i+1 > number.length-1) return 0;         
            if (j+1 > number[i].length-1) return 0;
            number[i][j] = 0;
            if (number[i+1][j+1] === 9) {
                number[i][j] ++
            };
            return number[i][j]
        }
 
 const renderNumberBoardTotal = () => {                                                                              //For each un-mined square, search in 8-grid adjacent manner for bombs. Display number according to number of adjacent mines.
        for (let i=0; i<number.length; i++) {
           for (let j=0; j<number[i].length; j++) {
            number[i][j] = renderNumberBoard1(i,j) + renderNumberBoard2(i,j) + renderNumberBoard3(i,j) + renderNumberBoard4(i,j) + renderNumberBoard5(i,j) + renderNumberBoard6(i,j) + renderNumberBoard7(i,j) + renderNumberBoard8(i,j);
            cover[i][j] = number[i][j];
        }
    } renderAll();
    }
    
const renderBomb = () => {
        for (let i=0; i<bombNumber; i++) {
            number[Math.floor(Math.random() * 8)][Math.floor(Math.random() * 10)] = 9;                               //Add unique number generator
        };            
        renderAll();
    }

const renderGameOver = () => {
    gameOutput.textContent = "GAME OVER";
}

const renderWin = () => {
    gameOutput.textContent = "Win";
}
    
const renderBoardNum = () => {                                                                                       //Renders board underneath, holds square number and bombs
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
    
const renderBoardCover = () => {                                                                                     //Renders board above, has number corresponding to square number underneath
        boardBodyCover.textContent = ""; 
        for(let i=0; i<cover.length; i++)
        {
            const boardCoverTr = document.createElement("tr");
            for(let j=0; j<cover[i].length; j++)
            {
                    const boardCoverTd = document.createElement("td");
                    boardCoverTd.innerText = cover[i][j];
                    boardCoverTd.addEventListener("click", clickCover(i,j));
                    boardCoverTd.addEventListener("contextmenu", clickFlag(i,j));
                    boardCoverTr.append(boardCoverTd);
                    if (cover[i][j] === "0") {
                        boardCoverTd.style.opacity = "0";
                        }
                    if (cover[i][j] === "1") {
                        boardCoverTd.style.backgroundColor = "green";
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
    document.querySelector(".reset").addEventListener("click", resetGame)
    gameOutput.textContent = "";
    renderBomb();
    renderAll();
    renderNumberBoardTotal();
    }


const easyScreen = () => {
    document.querySelector(".easy").addEventListener("click", easyGame)
}
easyScreen();