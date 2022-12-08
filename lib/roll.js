export function roll(numSides, numDice, numRolls) {

    var func = []

    for(let i = 0; i < numRolls; i++) {

        let total = 0

        for(let j = 0; j < numDice; j++) {
            total += Math.floor(Math.random() * numSides) + 1;
        }

        func.push(total);
    }
    
    return {"sides": numSides, "dice": numDice, "rolls": numRolls, "results": func};
}

