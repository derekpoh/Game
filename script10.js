/*----- constants -----*/


/*----- state variables -----*/
const number = [[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    ],
    [  
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ]
]
    
const cover = [[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    ],
    [  
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ]
]

const totalSquareCount = 80;
    
const bombNumber = 10;

const flagNumber = 10;
    
/*----- cached elements  -----*/
const boardBodyNum = document.querySelector(".number");
const boardBodyCover = document.querySelector(".cover");
const gameOutput = document.querySelector("output");
let Cover = cover[0];
let Numb = number[0];
    
/*----- event listeners -----*/

const clickFlag = (i,j) => (event) => {                                                                                    //Places a flag on potential mine square
    event.preventDefault();                                                                                                //Square "1" to denote square is flagged
    if(Cover[i][j] === "0") return;
    if(Cover[i][j] === "1") {
        Cover[i][j] = Numb[i][j];
        renderAll();
        return;
    }
    let flagPlaced = 0;
    for(let i=0; i<Cover.length; i++) {
        for(let j=0; j<Cover[i].length; j++) {
            if (Cover[i][j] === "1") {
                flagPlaced++;
            }
        }
    }
    if (flagPlaced === flagNumber) return;
    Cover[i][j] = "1";
    renderAll();
}

const clickCover = (i,j) => () => {                                                                                       //Uncovers clicked square and activates flood mechanism
    if(Cover[i][j] === "0") return;                                                                                       //String "0" to denote uncovered square
    if(Cover[i][j] === "1") return;
    if (Numb[i][j] === 9) {
        Cover[i][j] = "0";
            gameOver();
        }
        else {
            floodAll(i,j)
            Cover[i][j] = "0";
            renderAll();
        };
        checkWin();
        renderAll()
    }
    
const checkWin = () => {
        let totalUncovered = 0;
        for(let i=0; i<Cover.length; i++) {
            for(let j=0; j<Cover[i].length; j++) {
                if (Cover[i][j] === "0") {
                    totalUncovered++;
                }
            }
        }
        if (totalUncovered === totalSquareCount - bombNumber) {
            renderWin();
        }
    }
    
const gameOver = () => {
    for(let i=0; i<Cover.length; i++) {
        for(let j=0; j<Cover[i].length; j++) {
            Cover[i][j] = "0";
            renderGameOver();
            renderAll();
        }
    }
}

const easyGame = () => {
    Cover = cover[0];
    Numb = number[0];
    main();
}

const mediumGame = () => {
    Cover = cover[1];
    Numb = number[1];
    main();
}

const hardGame = () => {
    Cover = cover[2];
    Numb = number[2];
    main();
}

const resetGame = () => {
    for(let i=0; i<Cover.length; i++) {
        for(let j=0; j<Cover[i].length; j++) {
            Cover[i][j] = 0;
            Numb[i][j] = 0;
        }
    }
    main();
}
        
    /*----- functions -----*/

    const floodAll = (i,j) => {                                                                                           //Flood mechanism
        let flood = parseInt(Cover[i][j]);
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
        if (Cover[i][j-1] !== 0) {
            Cover[i][j-1] = "0";
            return;
        }
        Cover[i][j-1] = "0";
        floodAll(i,j-1);
    }
    
    const floodUp = (i,j) => {
        if (i-1 < 0) return;
        if (Cover[i-1][j] !== 0) {
            Cover[i-1][j] = "0"; 
            return;}      
        Cover[i-1][j] = "0";                                  
        floodAll(i-1,j);
    }
    
    const floodRight = (i,j) => {
        if (j+1 > Cover[i].length-1) return;
        if (Cover[i][j+1] !== 0) {
            Cover[i][j+1] = "0";
            return;}
        Cover[i][j+1] = "0";
        floodAll(i,j+1);
    }
    
    const floodDown = (i,j) => {
        if (i+1 > Cover.length-1) return;
        if (Cover[i+1][j] !== 0) {
            Cover[i+1][j] = "0";
            return;}
        Cover[i+1][j] = "0";
        floodAll(i+1,j)
    }
    
const renderNumberBoard1 = (i,j) => {                                                                                //Search diagonal (up,left)
            if (Numb[i][j] === 9) return 1;
            if (i-1 < 0) return 0;
            if (j-1 < 0) return 0;
            Numb[i][j] = 0;
            if (Numb[i-1][j-1] === 9) {
                Numb[i][j] ++
            };
            return Numb[i][j]
        }
        
const renderNumberBoard2 = (i,j) => {                                                                                //Search vertical (up)
            if (Numb[i][j] === 9) return 1;
            if (i-1 < 0) return 0;
            Numb[i][j] = 0;
            if (Numb[i-1][j] === 9) {
                Numb[i][j] ++
            };
            return Numb[i][j]
        }

const renderNumberBoard3 = (i,j) => {                                                                                //Search diagonal (up,right)
            if (Numb[i][j] === 9) return 1;
            if (i-1 < 0) return 0;
            if (j+1 > Numb[i].length-1) return 0;
            Numb[i][j] = 0;
            if (Numb[i-1][j+1] === 9) {
                Numb[i][j] ++
            };
            return Numb[i][j]
        }

const renderNumberBoard4 = (i,j) => {                                                                                //Search horizontal (left)
            if (Numb[i][j] === 9) return 1;
            if (j-1 < 0) return 0;
            Numb[i][j] = 0;
            if (Numb[i][j-1] === 9) {
                Numb[i][j] ++
            };
            return Numb[i][j]
        }

const renderNumberBoard5 = (i,j) => {                                                                                //Search horizontal (right)
            if (Numb[i][j] === 9) return 1;
            if (j+1 > Numb[i].length-1) return 0;
            Numb[i][j] = 0;
            if (Numb[i][j+1] === 9) {
                Numb[i][j] ++
            };
            return Numb[i][j]
        }
 
const renderNumberBoard6 = (i,j) => {                                                                                //Search diagonal (down,left)
            if (Numb[i][j] === 9) return 1;
            if (i+1 > Numb.length-1) return 0;
            if (j-1 < 0) return 0;
            Numb[i][j] = 0;
            if (Numb[i+1][j-1] === 9) {
                Numb[i][j] ++
            };
            return Numb[i][j]
        }
 
const renderNumberBoard7 = (i,j) => {                                                                                //Search vertical (down)
            if (Numb[i][j] === 9) return 1;
            if (i+1 > Numb.length-1) return 0;
            Numb[i][j] = 0;
            if (Numb[i+1][j] === 9) {
                Numb[i][j] ++
            };
            return Numb[i][j]
        }

const renderNumberBoard8 = (i,j) => {                                                                                //Search diagonal (down,right)
            if (Numb[i][j] === 9) return 2;
            if (i+1 > Numb.length-1) return 0;         
            if (j+1 > Numb[i].length-1) return 0;
            Numb[i][j] = 0;
            if (Numb[i+1][j+1] === 9) {
                Numb[i][j] ++
            };
            return Numb[i][j]
        }
 
 const renderNumberBoardTotal = () => {                                                                              //For each un-mined square, search in 8-grid adjacent manner for bombs. Display number according to number of adjacent mines.
        for (let i=0; i<Numb.length; i++) {
           for (let j=0; j<Numb[i].length; j++) {
            Numb[i][j] = renderNumberBoard1(i,j) + renderNumberBoard2(i,j) + renderNumberBoard3(i,j) + renderNumberBoard4(i,j) + renderNumberBoard5(i,j) + renderNumberBoard6(i,j) + renderNumberBoard7(i,j) + renderNumberBoard8(i,j);
            Cover[i][j] = Numb[i][j];
        }
    } renderAll();
    }
    
const renderBomb = () => {
        for (let i=0; i<bombNumber; i++) {
            Numb[Math.floor(Math.random() * 8)][Math.floor(Math.random() * 10)] = 9;                               //Add unique number generator
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
        for(let i=0; i<Numb.length; i++)
        {
            const boardNumTr = document.createElement("tr");
            for(let j=0; j<Numb[i].length; j++)
            {
                const boardNumTd = document.createElement("td");
                boardNumTd.innerText = Numb[i][j];
                boardNumTr.append(boardNumTd);
            }
            boardBodyNum.append(boardNumTr);
        }
    }
    
const renderBoardCover = () => {                                                                                     //Renders board above, has number corresponding to square number underneath
        boardBodyCover.textContent = ""; 
        for(let i=0; i<Cover.length; i++)
        {
            const boardCoverTr = document.createElement("tr");
            for(let j=0; j<Cover[i].length; j++)
            {
                    const boardCoverTd = document.createElement("td");
                    boardCoverTd.innerText = Cover[i][j];
                    boardCoverTd.addEventListener("click", clickCover(i,j));
                    boardCoverTd.addEventListener("contextmenu", clickFlag(i,j));
                    boardCoverTr.append(boardCoverTd);
                    if (Cover[i][j] === "0") {
                        boardCoverTd.style.opacity = "0";
                        }
                    if (Cover[i][j] === "1") {
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
    document.querySelector(".easy").addEventListener("click", easyGame);
    document.querySelector(".medium").addEventListener("click", mediumGame);
    document.querySelector(".hard").addEventListener("click", hardGame);
}
easyScreen();