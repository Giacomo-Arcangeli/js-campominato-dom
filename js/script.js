// recupero gli elementi dal DOM
const button = document.querySelector('button');
const squareBox = document.getElementById('square-box');
const scoreElement = document.getElementById('score');

// *********************
// FUNZIONI
// *********************

// funzione per creare i quadrati
function createsquares(){
    const square = document.createElement('div');
    square.classList.add('square');
    squareBox.classList.add('d-none');

    button.addEventListener('click' , function(){
        squareBox.classList.remove('d-none');
    })

    return square;
}

// funzione per creare le bombe
function createBombs (numberOfBombs , squaresNumber){
    let bombs = [];
    
    while(bombs.length < numberOfBombs){
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * squaresNumber) + 1;
        } while (bombs.includes(randomNumber));
        bombs.push(randomNumber);
    }
    return bombs;
}

// *********************

// disegno i quadrati
const rows = 10;
const cols = 10;
const numberOfSquares = rows * cols;

// punteggio
let score = 0;

// numero bombe
const totalBombs = 16;

// AL PLAY...
button.addEventListener('click' , function(){

    // lista delle bombe
    const bombs = [createBombs(totalBombs , numberOfSquares)];
    console.log (bombs);
})


// ? ********* LOGICA **********

// al click dei quadrati...
for (let i = 1; i <= numberOfSquares; i++){
    const square  = createsquares();
    square.innerText= i;
    
    square.addEventListener('click' , function(){
        
        if(square.classList.contains('clicked')) return;
        
        square.classList.add('clicked');
        console.log(i);
        
        const isBomb = bombs.includes(i);

    if (isBomb){
        square.classList.add('bomb');
        console.log('Hai perso! Hai realizzato:' + ' ' + score + ' ' + 'punti');
    }else {
        scoreElement.innerText = ('Punti:' + ' ' + ++score);

    }

    })

    squareBox.appendChild(square);

}


