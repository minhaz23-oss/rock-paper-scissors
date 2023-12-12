
let container = document.querySelector('.container');
let resetBtn = document.querySelector('.reset-btn');
let plsc = 0;
let pcsc = 0;

function resetGame() {
    container.innerHTML = `
    <div class="box">
    <div class="score">
      
       <div class="score-board">
          <h1 class="player-sc">0</h1>
          <h1>:</h1>
          <h1 class="pc-sc">0</h1>
       </div>
    </div>
     <div class="game">
        <div class="you">
         <img  src="paperComputer.png" alt="">
        </div>
        <div class="pc">
         <img  src="paperPlayer.png" alt="">
        </div>
     </div>
     <div class="heading">
       <h2>Let's play!!</h2>
     </div>
     <div class="select-move">
        <div class="rock" id="play">
         <img src="stoneComputer.png" alt="">
         <p>rock</p>
        </div>
        <div class="paper" id="play">
         <img src="paperComputer.png" alt="">
         <p>paper</p>
        </div>
        <div class="scissor" id="play">
         <img src="scissorsComputer.png" alt="">
         <p>scissor</p>
        </div>
     </div>
     <div class="reset-btn">
       <button>Play again</button>
     </div>
  </div>
    `;
     plsc = 0;
     pcsc = 0;
    // Reattach event listeners after resetting the game
    attachEventListeners();
}

function attachEventListeners() {
    let playBtns = document.querySelectorAll('#play');
    let player = document.querySelector('.you');
    let pc = document.querySelector('.pc');
    let heading = document.querySelector('.heading');
    let playerScore = document.querySelector('.player-sc');
    let pcScore = document.querySelector('.pc-sc');
    let scoreBoard = document.querySelector('.score-board');
    resetBtn = document.querySelector('.reset-btn');
    const pcImg = [
            '<img src="paperPlayer.png" alt="">',
            '<img src="stonePlayer.png" alt="">',
            '<img src="scissorsPlayer.png" alt="">'
        ]

    playBtns.forEach((e, index) => {
        e.addEventListener('click', function () {
            player.classList.add('anime');
            pc.classList.add('pcanime');
            heading.innerHTML = '<h2>wait......</h2>';
            setTimeout(() => {
                player.classList.remove('anime');
                pc.classList.remove('pcanime');
                let imgSrc = e.firstElementChild.outerHTML;
                player.innerHTML = imgSrc;

                // taking random pc image
                let rn = Math.floor(Math.random() * 3);
                pc.innerHTML = pcImg[rn];

                // taking pc value and user value
                let cpuValue = ['P', 'R', 'S'][rn];
                let userVal = ['R', 'P', 'S'][index];

                const outcome = {
                    RR: 'Draw',
                    RP: 'pc won!',
                    RS: 'you won!',
                    PS: 'pc won!',
                    PP: 'Draw',
                    PR: 'you won!',
                    SP: 'you won!',
                    SR: 'pc won!',
                    SS: 'Draw'
                };
                let outcomeValue = outcome[userVal + cpuValue];
                heading.innerHTML = `<h2>${outcomeValue}</h2>`;
                if (outcomeValue === 'you won!') {
                    plsc++;
                    playerScore.innerHTML = plsc;
                }
                if (outcomeValue === 'pc won!') {
                    pcsc++;
                    pcScore.innerHTML = pcsc;
                }
                if (plsc === 10) {
                    scoreBoard.innerHTML = '<h2> You won the game!!</h2> ';
                    resetBtn.style.display = 'block';
                }
                if (pcsc === 10) {
                    scoreBoard.innerHTML = '<h2> PC won the game!!</h2> ';
                    resetBtn.style.display = 'block';
                }
            }, 1000);
        });
    });

    resetBtn.addEventListener('click', resetGame);
}

// Initial attachment of event listeners
attachEventListeners();
