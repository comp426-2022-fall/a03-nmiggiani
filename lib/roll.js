export function roll(numSides = 6, numDice = 2, numRolls = 1) {

    var func = []

    for(let i = 0; i < numRolls; i++) {

        let total = 0

        for(let j = 0; j < numDice; j++) {

            total += Math.floor(Math.random() * sides) + 1;

        }
        func.push(total);
    }
    return {"sides": numSides, "dice": numDice, "rolls": numRolls, "results": func};
}