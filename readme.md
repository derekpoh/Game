# Minesweeper

##  User stories (Agile) / Requirements

As a user I will be able to:

* See a blank board when the game starts
* Click on any unopened/flagged square to open it
* Flag any unopened square susptected to contain a mine
* Upon opening an un-mined square, reveal a blank/'contains 0' square, or with a number ranging from 1-8 (indicating the number of adjacent mines to the opened square)
* Flood mechanism
* See a lose alert upon clicking a mined square
* See a win alert upon revealing all un-mined squares

## Wireframe -> Web* / Mobile


### Pseudocoding
1) Define required constants:


2) Define required variables used to track the state of the game:
   2.1) Use a board array to represent the squares
       - 2 board arrays: 1 to hold square number/bomb status, 1 to hold covered/uncovered status
       - latter board will overlap over other board

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:



4) Upon loading the app should:              //main()
  4.1) Initialize the state variables:
  - set all squares to covered state              
  - set all squares in board array to null/0       
  - add eventlistners to each square (2 listeners to each square => UNCOVER and FLAG squares)
  - assign fixed number of bombs to random squares
  - when bombs assigned, squares are assigned a number corresponding to number of bombs around them in 8-grid adjacent manner


  4.2) Render those state variables to the page:
    4.2.1) Render the board:
    - iterate through each element in all the display array
    - value of element will determine property of corresponding square: number on it, mined, covered/uncovered

5) Handle a player clicking a square:
- get index of square clicked (eventlistener, idx)
- check status of square (if uncovered => return, if covered => uncovered)
- check number, if bomb => lose condition
- screen through all the squares again (if number of uncovered squared = total number of square - total number of bombs ==> win condition)

		



