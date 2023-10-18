const minNumberElement = document.querySelector('#minNumber'), //Numero minimo
    maxNumberElement = document.querySelector('#maxNumber'), //Numero maximo
    guessesRemainingNumberElement = document.querySelector('#guessesRemaining'), //tentativas restantes
    userNumberElement = document.querySelector('#userNumber'), //Numero do usuário
    checkedButtonElement = document.querySelector('#checked'), //Botão de checar/adivinhar
    resetButtonElement = document.querySelector('#reset'), //botão de resetar
    tipElement = document.querySelector('#tip'); //Dicas
//---------------------querySelector('#idSelecionado') seleciona
//-------------------------------------------o id da pagina HTML

userNumberElement.addEventListener('input', handleNumberInput);
checkedButtonElement.addEventListener('click', guessNumber);
resetButtonElement.addEventListener('click', start);


const minNumber = 0,
    maxNumber = 10,
    totalGuesses = 3; //Total Maximo de tentativas

let currentNumber, //Numero que o usuário está tentando adivinhar (número aleatório gerado)
    userNumber, //Numero inserido pelo usuário
    guessesRemaining; // tentativas que ainda restam

function handleNumberInput(event) {
    let value = parseInt(event.target.value || minNumber);
    value = handleMinMax(minNumber, value, maxNumber)
    userNumber = value;
    event.target.value = value;

};

function start() {
    currentNumber = generateNumber();
    userNumber = minNumber;
    guessesRemaining = totalGuesses;

    userNumberElement.value = userNumber;
    minNumberElement.innerText = minNumber;
    maxNumberElement.innerText = maxNumber;
    tipElement.innerText = '';
    guessesRemainingNumberElement.value = guessesRemaining;

    userNumberElement.classList.remove('hidden');
    checkedButtonElement.classList.remove('hidden');
    resetButtonElement.classList.add('hidden');


};

function generateNumber() {
    return Math.floor(Math.random() * (maxNumber + 1 - minNumber)) + minNumber;
};

function handleMinMax(min, number, max) {
    return Math.min(Math.max(number, min), max);

};

function guessNumber() {

    guessesRemaining--;
    guessesRemainingNumberElement.innerText = guessesRemaining;
    if (currentNumber === userNumber) {
        tipElement.innerText = `Você acertou, Parabéns! O número é ${currentNumber}`;
        gameOver();
    } else {
        if (guessesRemaining > 0) {
            tipElement.innerText = `Errou! O número é ${currentNumber > userNumber ? 'maior' : 'menor'} que o escolhido.`;
        } else {
            tipElement.innerText = `Suas tentativas acabaram! O número era ${currentNumber}`;
            gameOver(); 
        };
    };

};

function gameOver() {

    userNumberElement.classList.add('hidden');
    checkedButtonElement.classList.add('hidden');
    resetButtonElement.classList.remove('hidden');

};

start();