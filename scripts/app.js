// Space Battle

const ga = {
    hull: 20,
    firepower: 5,
    accuracy: .7
};
let alienQuant = Math.ceil(Math.random() * 10);
let aliens = [];
for (let i = 0; i < alienQuant; i++) {
    aliens.push({
        hull: Math.round(Math.random() * 3) + 3,
        firepower: Math.round(Math.random() * 2) + 2,
        accuracy: (Math.random() * .2) + .6
    });
}

let war = () => {
    let alienNum = 0;
    while (aliens.filter(item => item.hull > 0).length > 0 && ga.hull > 0) {
        let exchange = () => {
            let volley = 0;
            while (ga.hull > 0 && aliens[alienNum].hull > 0) {
                Math.random() < ga.accuracy ? aliens[alienNum].hull-= ga.firepower : null;
                Math.random() < aliens[alienNum].accuracy ? ga.hull-= aliens[alienNum].firepower : null;
                volley++
            }
        }
        exchange();
        let answer = prompt(`There's another alien ship! Press 'f' to keep fighting or any other key to retreat.`, );
        if (answer == 'f') {
            alienNum++
        } else {
            break;
        }
        
    }
}
war();
console.log(ga);
console.log(aliens);




// * The aliens send a random number of ships to attack Earth. Think of a reasonable range and implement it.

// * Scientists have developed a super targeting computer for your lasers. You now are asked which of the aliens you would like to hit with your lasers.

// * Scientists have improved your ship's shields. They don't work that consistently, and only improve your hit points by a random number each time

// * Scientists have put missiles on your ship. You only have a limited number of them, but they do a lot of damage. You can say before each battle if you want to use one of your missles.

// * The aliens have gained emotions and now can attack more than one at a time.

// * Evil alien scientists have created an alien mega-ship. This mega-ship contains a number of "weapon pods" that each have their own individual hit points. These "weapon-pods" ( objects ) must all be destroyed before you can begin doing damage to the main ship, which also has its own hit points.

// <br>
// <hr>

// # &#x1F680; Bonus Bonuses

// * When the game is over, prompt the user if they would like to play again, and make it so the user can play again with all the values set back to default.

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
