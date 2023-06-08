// recupero gli elementi dal DOM
const button = document.querySelector('button');
const squareBox = document.getElementById('square-box');


// **************
// FUNZIONI
function createsquare(){
    const square = document.createElement('div');
    square.classList.add('square' , 'd-none');

    button.addEventListener('click' , function(){
        square.classList.remove('d-none');
    })

    return square;
}
// **************

// creo i quadrati
const rows = 10;
const cols = 10;
const numberOfSquares = rows * cols;

// al click dei quadrati...
for (let i = 0; i < numberOfSquares; i++){
    const square  = createsquare();
    square.innerText= i + 1;

    square.addEventListener('click' , function(){
        square.classList.toggle('clicked');
        console.log(i + 1);
    })

    squareBox.appendChild(square);
}