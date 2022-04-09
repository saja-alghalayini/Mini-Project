var choices=
 [
  "HTML",
  "CSS",
  "JavaScript",
	 "Golang",
	 "Mongodb",
   "CSharp",
	 "JSON",
	 "PHP",
   "Python",
   "SQL",
	 "Kotlin",
	 "Ruby" 
  ]

let answer = '';
let maxWrong = 5;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() 
{
  answer = choices [Math.floor(Math.random() * choices .length)];
}


//********Bootstarp buttons*********//
function generateButtons() 
{
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lgbtn btn-outline-dark m-2"
        id='` + letter + `'
        onClick="Guess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}
//********End Bootstarp buttons*********//



function Guess(chosnLetter)
 {
  guessed.indexOf(chosnLetter) === -1 ? guessed.push(chosnLetter) : null;
  document.getElementById(chosnLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosnLetter) >= 0) 
  {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosnLetter) === -1) 
  {
    mistakes++;
    updateMistakes();
    gameLost();
    updateHangmanPicture();
  }
}



function updateHangmanPicture() 
{
  document.getElementById('hangmanPic').src = 'img gose here' + mistakes + '.jpg';
}


function checkIfGameWon() 
{
  if (wordStatus === answer) 
  {
    document.getElementById('keyboard').innerHTML = 'You did it, Good Job😃💜...';
  }
}


function gameLost() 
{
  if (mistakes === maxWrong) 
  {
    document.getElementById('smthng').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'Game Over, Good Luck in the next time😕💔...';
  }
}


function guessedWord() 
{
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  document.getElementById('smthng').innerHTML = wordStatus;
}


function updateMistakes() 
{
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() 
{
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './Img/img1.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();