console.log('all start somewhere');
let gameWords = null;


let wordWrapper = document.querySelector('.word__container');

/* Get all words (init basically) */
async function fetchGameWords(){
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=100');

    response.ok;
    response.status;

    const words = await response.json();
    return words;
};
fetchGameWords().then(words => {
    gameWords = words;
    gameWords.forEach(word => {
        let individualWord = document.createElement('p');
        individualWord.classList.add('game__word');
        individualWord.innerHTML = word;
        wordWrapper.appendChild(individualWord);
    });
    let firstWord = document.querySelectorAll('.game__word');
    //Set our 'active' word
    firstWord[0].classList.add('active__word');
});


let gameInput = document.querySelector('#game__input');
gameInput.addEventListener('click', function(e){
    document.addEventListener('keyup', event => {
        //|On space up, compare current value to the .active__word, if
        if (event.code === 'Space' || event.code === 'Enter') {
            isCorrect(document.querySelector('.active__word').innerText.trim(), gameInput.value.trim());
        }
        console.log(gameInput.value);
    });
});



function isCorrect(actualWord, comparitorWord){
    if(actualWord === comparitorWord){
        console.log('correct');
        gameInput.value = '';
        let oldFirstWord = document.querySelector('.active__word');

        oldFirstWord.classList.add('green');

        oldFirstWord.remove();
        
        let newFirstWord = document.querySelectorAll('.game__word');
        //Set our 'active' word
        newFirstWord[0].classList.add('active__word');
    }else {
        let oldFirstWord = document.querySelector('.active__word');
        oldFirstWord.classList.add('red');
        console.log('incorrect')
    }
}


