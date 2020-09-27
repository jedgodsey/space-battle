// SPACE BATTLE //

let replay = () => {
    let playAgain = prompt(`Would you like to play again? Press 'y'`, );
    playAgain === 'y' ? spaceBattle() : null;
}

let spaceBattle = () => {
    let ga = {};
    ga = {
        hull: 20,
        firepower: 5,
        accuracy: .7
    };

    // determines alien force characteristics
    let alienQuant = Math.ceil(Math.random() * 8);
    let aliens = [];
    for (let i = 0; i < alienQuant; i++) {
        let podQuant = Math.ceil(Math.random() * 4);
        let alien = {
            hull: Math.round(Math.random() * 3) + 3,
            firepower: Math.round(Math.random() * 2),
            accuracy: (Math.random() * .2) + .6,
            pods: []
        };
        for (let k = 0; k < podQuant; k++) {
            alien.pods.push({
                hull: Math.round(Math.random() * 3),
                firepower: Math.round(Math.random() * 2),
                accuracy: (Math.random() * .2)
            })
        }
        aliens.push(alien);
    }

    // //order of battle
    let war = () => {
        ga.hull += Math.ceil(Math.random() * 20);
        let alienNum = 0;
        let targetShip = 0;
        while (aliens.filter(item => item.hull > 0).length > 0 && ga.hull > 0) { //while not all ships blown up
            let exchange = () => {
                let volley = 0;
                while (ga.hull > 0 && aliens[targetShip].hull > 0) { //while earth ship still standing and target ship still standing

                    // humans shoot at aliens
                    if (aliens[targetShip].pods.filter(item => item.hull > 0).length > 0) { //if there are alien pods left on this ship
                        let podAttack = 0;
                        for (let i = 0; ga.hull > 0
                            //  && aliens[targetShip].pods[podAttack].hull > 0 
                             && podAttack < aliens[targetShip].pods.length; i++) { //iterate until the pod (or ship) is dead
                            if (Math.random() < ga.accuracy) {
                                aliens[targetShip].pods[podAttack].hull -= ga.firepower; //pod takes shots
                                aliens[targetShip].pods[podAttack].hull <= 0 ? podAttack++ : null; //skip to next pod
                            }
                        }
                    } else {
                        Math.random() < ga.accuracy ? aliens[targetShip].hull -= ga.firepower : null; //alien ship takes shots
                    }
                    // aliens shoot at humans
                    let randomSize = Math.ceil(Math.random() * aliens.length);
                    let randomAttack = (ship) => {
                        Math.random() < ship.accuracy ? ga.hull -= ship.firepower : null;
                    }
                    for (let j = 1; j < randomSize; j++) {
                        randomAttack(aliens[Math.floor(Math.random() * aliens.length)]);
                    }
                    volley++
                }
            }
            exchange();
            targetShip = prompt(`There's still ships threatening earth! Press 1 through ${aliens.length} to fire your laser at one of the ships, or press any other key to retreat.`, ) - 1;
            if (targetShip >= 0 && targetShip < aliens.length) {
                alienNum++
            } else {
                break;
            }
            
        }
        console.log(ga);
        console.log(aliens);
    }
    war();
}
spaceBattle();
replay();


// * So far the entire game is just one battle, with many aliens. Implement a game that consists of multiple battles where enemies respawn for a new battle at the end of the old battle. Keep track of points for the number of wins the player has.

// * After every battle you are asked if you want to return to base and recharge your shields.

// * Make the players and enemies stronger after each battle

// * Distribute medals and power ups to the player depending on points

// <br>
// <hr>



// # Cheat codes &#x2B06; &#x2197; &#x27A1;

// **Don't read the following steps if you want to figure this out on your own.**

// **These are just suggestions, not answers, and will change the nature of the game that you would have made had you not read these.**

// <hr>

// Make the USS_Assembly object.

// Make a single alien ship object.

// Simulate a battle between your ship and a single alien ship first.

// Make a method for the USS Assembly that will attack a given target. The target can be an input to the method.

// Run the method and pass it the alien ship.

// Make it so the method reduces the target's hull by the firepower of the USS Assembly.

// <hr>

// Make a game object

// Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly. If the hull is 0 or less, display a message that the ship went kabloo-ey.

// Make it so the alien will only be hit if a Math.random call is below the accuracy threshold.

// Make a method for the alien ship to attack a target.

// At a status console log for the end of the round.

// PROBLEM: If you make the alien ship go kabloo-ey, then the alien should not then be able to  attack you. Fix this.

// Make it so the attacks will keep occuring until someone's hull is at 0. Isolate what it is that you want to repeat.

// <hr>

// Make many alien ships with a Class. Make each object slightly different . . .

// Hull can be a random number between 3 and 6, firepower between 2 and 4, accuracy between 0.6 and 0.8.

// Make a loop that calls the Class and generates alien ships. Push those constructed objects into a predefined array. Start with 6 ships (the loop should run 6 times).

// Try out the game with the first alien ship in the array.

// Run the battle with all ships in turn.

// <hr>

// Move functions into the game object.

// Move on to the bonuses.

// <br>
// <hr>

// # Extra fun: style the console (Chrome only)

// Output in Chrome console: 

// ![](https://i.imgur.com/ehyNTL0.png)

// You can use CSS in your Chrome console messages. Above is a simple example where messages are easier to differentiate.

// Formula, use `%c` in the first argument to console log, and provide CSS to the second argument:

// ```javascript
// console.log('%c spacebattle', 'font-size: 40px');
// ```

// Use multiple CSS properties:

// ```javascript
// console.log('%c You have done ' + player.firepower + ' damage ', 'font-style: italic; background: azure; border: 1px solid grey;');
// ```
