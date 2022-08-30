// get the HTML content of the main menu for reset function
const mainMenu = document.body.innerHTML

// create empty arrays for the player choices
let playerOneMoves = []
let playerTwoMoves = []


function startPVP() {
    // get the body of the page
    let startBody = document.body;

    // Set the body's innerHTML to player vs player choice selection
    startBody.innerHTML = `
    <!-- title division -->
    <div id="landing-title">
    <h2>
        Rock, Paper, Scissors,
    </h2>
    <h1>
        Nucleur Bomb!
    </h1>

    <div id="gradient1"></div>
</div>

<br>

<!--  the code below builds the box where player one can click to select from various move types and lock in their choices -->
<div id="move-selection">
    <div id="player-one-moves">
        <h3 class="player-header">Player One</h3>
        <div id=player-one-move-one>
            <h2 class="choice-header">First Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceOne('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceOne('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceOne('rock')"></i>                       
            </div>
        </div>

        <br>

        <div id="player-one-move-two">
            <h2 class="choice-header">Second Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceTwo('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceTwo('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceTwo('rock')"></i>                       
            </div>
        </div>

        <br>

        <div id="player-one-move-three">
            <h2 class="choice-header">Third Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceThree('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceThree('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceThree('rock')"></i>                       
            </div>
        </div>

        <!-- the code below will lock the input for player one and update the HTML to display player two -->
        <div class="lock-answer" onclick="lockAnswers();">Lock in your choices! <i class="fa-solid fa-lock-open"></i></div>
        <div id="grad-player-one"></div>

    </div>

    <!-- the code below builds the same division as above but for player 2 instead -->
    <div id="player-two-moves">
        <h3 class="player-header">Player Two</h3>
        <div id="player-two-move-one">
            <h2 class="choice-header">First Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceOne('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceOne('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceOne('rock')"></i>                       
            </div>
        </div>

        <br>

        <div id="player-two-move-two">
            <h2 class="choice-header">Second Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceTwo('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceTwo('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceTwo('rock')"></i>                       
            </div>
        </div>

        <br>

        <div id="player-two-move-three">
            <h2 class="choice-header">Third Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceThree('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceThree('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceThree('rock')"></i>                       
            </div>
        </div>
        <div class="lock-answer" onclick="compareResultsPVP();">Compare your choices!</div>
        <div id="grad-player-two"></div>

    </div>
</div>

<!-- this code will reset the HTML content of the page to that of the original Main Menu content -->
<div id="reset-button" onclick="resetGame();">Main Menu</div>



<!-- Linking to javascript game logic -->
<script src="assets/js/script.js"></script>
    `;

    console.log('Starting Player VS Player.')
}

function startPVC() {
    // get the body of the page
    let startBody = document.body;

    // Set the body's innerHTML to player vs computer choice selection
    startBody.innerHTML = `
    <div id="landing-title">
          <h2>
            Rock, Paper, Scissors,
          </h2>
          <h1>
            Nucleur Bomb!
          </h1>
        
          <div id="gradient1"></div>
        </div>

        <br>

        <div id="player-moves">
        
          <div id=move-one>
            <h2>First Choice:</h2>
          </div>

          <div id=move-two>
            <h2>Second Choice:</h2>
          </div>

          <div id=move-three>
            <h2>Third Choice:</h2>
          </div>

        </div>

        <div id="reset-button" onclick="resetGame();">Main Menu</div>

        

        <!-- Linking to javascript game logic -->
        <script src="assets/js/script.js"></script>
    `;

    console.log('Starting Player VS Computer.');
}

pickPlayerOneChoiceOne = (handOne) => {
    let hideChoiceOne = document.getElementById("player-one-move-one")
    hideChoiceOne.style.display = "none";

    playerOneMoves.push(handOne)
    console.log(playerOneMoves);

    pickPlayerOneChoiceTwo = (handTwo) => {
        let hideChoiceTwo = document.getElementById("player-one-move-two")
        hideChoiceTwo.style.display = "none";

        playerOneMoves.push(handTwo)
        console.log(playerOneMoves);
    }

    pickPlayerOneChoiceThree = (handThree) => {
        let hideChoiceTwo = document.getElementById("player-one-move-three")
        hideChoiceTwo.style.display = "none";

        playerOneMoves.push(handThree)
        console.log(playerOneMoves);
    }
}

pickPlayerTwoChoiceOne = (handOne) => {
    let hideChoiceOne = document.getElementById("player-two-move-one")
    hideChoiceOne.style.display = "none";

    playerTwoMoves.push(handOne)
    console.log(playerTwoMoves);

    pickPlayerTwoChoiceTwo = (handTwo) => {
        let hideChoiceTwo = document.getElementById("player-two-move-two")
        hideChoiceTwo.style.display = "none";

        playerTwoMoves.push(handTwo)
        console.log(playerTwoMoves);
    }

    pickPlayerTwoChoiceThree = (handThree) => {
        let hideChoiceThree = document.getElementById("player-two-move-three")
        hideChoiceThree.style.display = "none";

        playerTwoMoves.push(handThree)
        console.log(playerTwoMoves);
    }
}



function resetGame() {
    let startBody = document.body;
    startBody.innerHTML = mainMenu;
    console.log('Returning to the Main Menu...');
}

function lockAnswers() {
    const hiddenAnswers = document.getElementById("player-one-moves");
    const showAnswers = document.getElementById("player-two-moves");

    if (hiddenAnswers.style.display !== "none") {
        hiddenAnswers.style.display = "none";
        showAnswers.id = "player-two-moves-show"
        console.log("Player One choices locked")
        alert("Click OK to hide your choices, then hand the controls to Player Two!")
    } else {
        hiddenAnswers.style.display = "block";
    }

};