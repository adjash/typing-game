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
});


 let gameInput = document.querySelector('#game__input');
gameInput.addEventListener('click', function(e){
    let firstWord = document.querySelectorAll('.game__word');
    //Set our 'active' word
    firstWord[0].classList.add('active__word');

    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            
        }
        console.log(gameInput.value);
    });
});


