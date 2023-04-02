

/* 7. Check the code below and fix the bug and complete withMetrics function to make  the final console.log() print out the expected result*/
function createRecipe(name, instructions) {
    return {
        name,
        instructions,
        printInstructions: ()=> {
            console.log(`Instructions for ${this.name}:`);
            console.log(this.instructions + `for ${this.time} seconds` + `. Contain ${this.calories} calories`);
        }
    }
}

function withMetrics(time, calories) {
    // Your code goes here
}

// This is the test code
const pancakeRecipe = withMetrics(30, 200)(createRecipe('Pancakes', 'Mix flour, eggs, and milk. Cook on a griddle.'));

/** Expect to see
 * Instructions for Pancakes:
 * Mix flour, eggs, and milk. Cook on a griddle.for 30 seconds. Contain 200 calories
 */
pancakeRecipe.printInstructions()