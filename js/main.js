 // Helpers
 const $ = id => {
    return document.getElementById(id);
}
// Public variables
let candles = document.querySelectorAll('.candle').length;
let moves = [];
let player = 1;

$('player').textContent = `Player: ${player}`
// Functions
function candleClick(event, element) {
    event.preventDefault();
    const id = element.id;
    let bool = false;
    
    moves.forEach((moveId, i) => {
        if (moveId == id) {
            moves.splice(i, 1);
            bool = true;
            // Dynamic content here
            document.getElementById(id).src== "img/lightcandle.png";

        }
    });

    if(moves.length >= 3) {
        alert('You cannot select more than 3 candles');
    } else if ((candles-moves.length) <= 1){
        alert('Select less candles')
    } else if(!bool) {
        moves.push(id);
        // Dynamic content here
        document.getElementById(id).src= "img/candle.png";
        $(id).className = "lcandle";
    }            
}

function playMove() {
            
    if(moves.length == 0) {
        alert('Select 1, 2 or 3 candles');
    } else {
        for (let i = 0; i < moves.length; i++) {
            // Dynamic content here
            moves.splice(i, 1);
            i--;
        }
    }

     let _candles = document.querySelectorAll('.candle').length
    
    if(_candles == 1) {
        gameOver(player);
    } else {
        lcandles = _candles;

        // Next player
        player = (player === 1) ? 2 : 1;
        $('player').textContent = `Player: ${player}`
    }
}

function gameOver() {
    // Add some delay
    alert(`Ha ganado el jugador ${player}!`)
    // Dynamic content here... (Is rlly necessary?)
}