console.log('Code!')

//test
function findUser (names) {
    let outName = []
    for (let name of names) {
        if (name.first === first) { 
            outName.push(name)
        }
    }
    return outName
}

function buildResults (resultsArray){
    for (let name of resultsArray){
        let newDiv = document.createElement('div')
        newDiv.innerText = `${name.name}`
        resultsDiv.appendChild(newDiv)
    }
}

// call the function on a specific city and array of people
// who in our class lives in RDU
// console.log(findPeopleByCity('RDU', team12))

// add each person to the page

buildResults(findUser(’sophia’))