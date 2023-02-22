/*----- constants -----*/


/*----- state variables -----*/

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

const game = {
    button: "mode",
    totalSquareCount: [80,252,480],
    boardLength: [10,18,24],
    boardWidth: [8,14,20],
    bombNumber: [10,42,107],
    flagNumber: [10,42,107],
};

/*----- cached elements  -----*/
const boardBodyCover = document.querySelector(".cover");
const gameOutput = document.querySelector("output");
let Cover = cover[0];
let TotalSquareCount = game.totalSquareCount[0];
let BoardLength = game.boardLength[0];
let BoardWidth = game.boardWidth[0];
let BombNumber = game.bombNumber[0];
let FlagNumber = game.flagNumber[0];

/*----- event listeners -----*/

const clickFlag = (i,j) => (event) => {                                                                                    //Places a flag on potential mine square 
    event.preventDefault();                                                                                                
    if(Cover[i][j] === String(Cover[i][j])) return;
    if (Cover[i][j] === 11) {                                                                                              //Returns bomb to original when unflagged
        Cover[i][j] = 9;
        renderAll();
        return
    }
    if(Cover[i][j] === 10) {                                                                                               //Returns cell to original number when unflagged
        Cover[i][j] = renderNumberBoard1(i,j) + renderNumberBoard2(i,j) + renderNumberBoard3(i,j) + renderNumberBoard4(i,j) + renderNumberBoard5(i,j) + renderNumberBoard6(i,j) + renderNumberBoard7(i,j) + renderNumberBoard8(i,j);
        renderAll();
        return;
    }
    let flagPlaced = 0;                                                                                                    //Limits max number of flags = number of bombs placed
    for(let i=0; i<Cover.length; i++) {
        for(let j=0; j<Cover[i].length; j++) {
            if (Cover[i][j] === 10) {
                flagPlaced++;
            }
        }
    }
    if (flagPlaced === FlagNumber) return;                                                                                //Bomb cell = 11, rest of cells = 10
    if (Cover[i][j] === 9) {
        Cover[i][j] = 11;
        renderAll();
        return
    }
    Cover[i][j] = 10;
    renderAll();
}

const clickCover = (i,j) => () => {                                                                                       //Uncovers clicked square and activates flood mechanism
    if(Cover[i][j] === String(Cover[i][j])) return;                                                                       //Prevent flagged cells from accidentally being uncovered
    if(Cover[i][j] === 10 || Cover[i][j] === 11) return;
    if (Cover[i][j] === 9) {
        gameOver();
        return;
        }
        else {
            floodAll(i,j)
            Cover[i][j] = String(Cover[i][j]);
            renderAll();
        };
        checkWin();
        renderAll()
    }
    
const checkWin = () => {                                                                                                 //Checks if game is won after each click
        let totalUncovered = 0;
        let bombPlaced = 0;
        for(let i=0; i<Cover.length; i++) {
            for(let j=0; j<Cover[i].length; j++) {
                if (Cover[i][j] === String(Cover[i][j])) {
                    totalUncovered++;
                }
                if (Cover[i][j] === 9 || Cover[i][j] === 11) {
                    bombPlaced++;
                }
            }
        }
        if (totalUncovered === TotalSquareCount - bombPlaced) {
            uncoverEntireBoard();
            renderWin();
        }
    }
    
const gameOver = () => {                                                                                                //Game is lose if player clicks on bomb
    uncoverEntireBoard();
    renderGameOver();
}

const uncoverEntireBoard = () => {                                                                                     //Exposes entire board
    for(let i=0; i<Cover.length; i++) {
        for(let j=0; j<Cover[i].length; j++) {
            if (Cover[i][j] === 9 || Cover[i][j] === 11) {
                Cover[i][j] = 13;
            };
            if (Cover[i][j] === 10) {
                Cover[i][j] = renderNumberBoard1(i,j) + renderNumberBoard2(i,j) + renderNumberBoard3(i,j) + renderNumberBoard4(i,j) + renderNumberBoard5(i,j) + renderNumberBoard6(i,j) + renderNumberBoard7(i,j) + renderNumberBoard8(i,j);
            };
            Cover[i][j] = String(Cover[i][j]);
        }
    }
    renderAll();
}

const easyGame = () => {                                                                                               //Easy Mode
    setGameDifficulty(0);
}

const mediumGame = () => {                                                                                             //Medium Mode
    setGameDifficulty(1);
}

const hardGame = () => {                                                                                               //Hard Mode
    setGameDifficulty(2);
}

const setGameDifficulty = (i) => {
    game.button = "screen";
    Cover = cover[i];
    TotalSquareCount = game.totalSquareCount[i];
    BoardLength = game.boardLength[i];
    BoardWidth = game.boardWidth[i];
    BombNumber = game.bombNumber[i];
    FlagNumber = game.flagNumber[i];
    randomBackgroundImage();
    main();
}

const resetGame = () => {                                                                                             //Reset game
    clearEntireBoard();
    main();
}

const homePage = () => {                                                                                              //Go back to home screen
    game.button = "mode"; 
    clearEntireBoard();
    renderScreen();
    homeBackground();
}

const clearEntireBoard = () => {                                                                                      //Removes all board numbers and bombs
    for(let i=0; i<Cover.length; i++) {
        for(let j=0; j<Cover[i].length; j++) {
            Cover[i][j] = 0;
        }
    }
}
        
    /*----- functions -----*/

    const floodAll = (i,j) => {                                                                                        //Flood mechanism
        let flood = parseInt(Cover[i][j]);
        if (flood !== 0) {
            flood = String(Cover[i][j]);
            return;
        }
        floodLeft(i,j);
        floodUp(i,j);
        floodRight(i,j);
        floodDown(i,j);
        renderAll();
    }
    
    const floodLeft = (i,j) => {
        if (j-1 < 0) return;
        if (Cover[i][j-1] === 10 || Cover[i][j-1] === 11) return;
        if (Cover[i][j-1] !== 0) {
            Cover[i][j-1] = String(Cover[i][j-1]);
            return;
        }
        Cover[i][j-1] = String(Cover[i][j-1]);
        floodAll(i,j-1);
    }
    
    const floodUp = (i,j) => {
        if (i-1 < 0) return;
        if (Cover[i-1][j] === 10 || Cover[i-1][j] === 11) return;
        if (Cover[i-1][j] !== 0) {
            Cover[i-1][j] = String(Cover[i-1][j]); 
            return;}      
        Cover[i-1][j] = String(Cover[i-1][j]);                                
        floodAll(i-1,j);
    }
    
    const floodRight = (i,j) => {
        if (j+1 > Cover[i].length-1) return;
        if (Cover[i][j+1] === 10 || Cover[i][j+1] === 11) return;
        if (Cover[i][j+1] !== 0) {
            Cover[i][j+1] = String(Cover[i][j+1]);
            return;}
        Cover[i][j+1] = String(Cover[i][j+1]);
        floodAll(i,j+1);
    }
    
    const floodDown = (i,j) => {
        if (i+1 > Cover.length-1) return;
        if (Cover[i+1][j] === 10 || Cover[i+1][j] === 11) return;
        if (Cover[i+1][j] !== 0) {
            Cover[i+1][j] = String(Cover[i+1][j]);
            return;}
        Cover[i+1][j] = String(Cover[i+1][j]);
        floodAll(i+1,j)
    }
    
const renderNumberBoard1 = (i,j) => {                                                                                //Search diagonal (up,left)    --   See renderNumberBoardTotal()
            if (Cover[i][j] === 9) return 0;
            if (i-1 < 0) return 0;
            if (j-1 < 0) return 0;
            Cover[i][j] = 0;
            if (Cover[i-1][j-1] === 9 || Cover[i-1][j-1] === 11) {
                Cover[i][j] ++
            };
            return Cover[i][j]
        }
        
const renderNumberBoard2 = (i,j) => {                                                                                //Search vertical (up)
            if (Cover[i][j] === 9) return 0;
            if (i-1 < 0) return 0;
            Cover[i][j] = 0;
            if (Cover[i-1][j] === 9 || Cover[i-1][j] === 11) {
                Cover[i][j] ++
            };
            return Cover[i][j]
        }

const renderNumberBoard3 = (i,j) => {                                                                                //Search diagonal (up,right)
            if (Cover[i][j] === 9) return 0;
            if (i-1 < 0) return 0;
            if (j+1 > Cover[i].length-1) return 0;
            Cover[i][j] = 0;
            if (Cover[i-1][j+1] === 9 || Cover[i-1][j+1] === 11) {
                Cover[i][j] ++
            };
            return Cover[i][j]
        }

const renderNumberBoard4 = (i,j) => {                                                                                //Search horizontal (left)
            if (Cover[i][j] === 9) return 0;
            if (j-1 < 0) return 0;
            Cover[i][j] = 0;
            if (Cover[i][j-1] === 9 || Cover[i][j-1] === 11) {
                Cover[i][j] ++
            };
            return Cover[i][j]
        }

const renderNumberBoard5 = (i,j) => {                                                                                //Search horizontal (right)
            if (Cover[i][j] === 9) return 0;
            if (j+1 > Cover[i].length-1) return 0;
            Cover[i][j] = 0;
            if (Cover[i][j+1] === 9 || Cover[i][j+1] === 11) {
                Cover[i][j] ++
            };
            return Cover[i][j]
        }
 
const renderNumberBoard6 = (i,j) => {                                                                                //Search diagonal (down,left)
            if (Cover[i][j] === 9) return 0;
            if (i+1 > Cover.length-1) return 0;
            if (j-1 < 0) return 0;
            Cover[i][j] = 0;
            if (Cover[i+1][j-1] === 9 || Cover[i+1][j-1] === 11) {
                Cover[i][j] ++
            };
            return Cover[i][j]
        }
 
const renderNumberBoard7 = (i,j) => {                                                                                //Search vertical (down)
            if (Cover[i][j] === 9) return 0;
            if (i+1 > Cover.length-1) return 0;
            Cover[i][j] = 0;
            if (Cover[i+1][j] === 9 || Cover[i+1][j] === 11) {
                Cover[i][j] ++
            };
            return Cover[i][j]
        }

const renderNumberBoard8 = (i,j) => {                                                                                //Search diagonal (down,right)
            if (Cover[i][j] === 9) return 9;
            if (i+1 > Cover.length-1) return 0;         
            if (j+1 > Cover[i].length-1) return 0;
            Cover[i][j] = 0;
            if (Cover[i+1][j+1] === 9 || Cover[i+1][j+1] === 11) {
                Cover[i][j] ++
            };
            return Cover[i][j]
        }
 
 const renderNumberBoardTotal = () => {                                                                              //For each un-mined square, search in 8-grid adjacent manner for bombs. Display number according to number of adjacent mines.
        for (let i=0; i<Cover.length; i++) {
           for (let j=0; j<Cover[i].length; j++) {
            Cover[i][j] = renderNumberBoard1(i,j) + renderNumberBoard2(i,j) + renderNumberBoard3(i,j) + renderNumberBoard4(i,j) + renderNumberBoard5(i,j) + renderNumberBoard6(i,j) + renderNumberBoard7(i,j) + renderNumberBoard8(i,j);
        }
    } renderAll();
    }
    
const renderBomb = () => {
        for (let i=0; i<BombNumber; i++) {
            Cover[Math.floor(Math.random() * BoardWidth)][Math.floor(Math.random() * BoardLength)] = 9;              
        };            
        renderAll();
    }

const renderGameOver = () => {                                                                                      
    gameOutput.textContent = "GAME OVER";
    renderAll();
}

const renderWin = () => {
    gameOutput.textContent = "Win";
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
                    if (typeof Cover[i][j] === "string") {
                        boardCoverTd.style.backgroundColor = "grey";
                        }
                    if (Cover[i][j] === 10 || Cover[i][j] === 11) {
                        boardCoverTd.innerHTML = "🚩";
                        }
                    if (Cover[i][j] === "13") {
                        boardCoverTd.innerHTML = "💣";
                        }
                    }
                    boardBodyCover.append(boardCoverTr);
                }
             }
            
            
const renderAll = () => {
                renderBoardCover();
                renderScreen();
            }
            
const main = () => {                                                                                                //Renders game when player selects difficulty
    document.querySelector("#reset").addEventListener("click", resetGame)
    document.querySelector("#home").addEventListener("click", homePage)
    gameOutput.textContent = "";
    renderBomb();
    renderAll();
    renderNumberBoardTotal();
    }

const renderScreen = () => {
    document.querySelector(".mode").style.display = "none";                                                        //Render between 'home' and 'game' screen
    document.querySelector(".screen").style.display = "none";
    const buttonOnDisplay = document.querySelector("." + game.button)
    buttonOnDisplay.style.display = "block";
    if (game.button === "mode") {
    boardBodyCover.textContent = "";
    gameOutput.textContent = "";
} 
}

const startScreen = () => {                                                                                       //Starting screen when webpage is loaded
    document.querySelector("#easy").addEventListener("click", easyGame);
    document.querySelector("#medium").addEventListener("click", mediumGame);
    document.querySelector("#hard").addEventListener("click", hardGame);
    document.querySelector(".screen").style.display = "none";
}
startScreen();