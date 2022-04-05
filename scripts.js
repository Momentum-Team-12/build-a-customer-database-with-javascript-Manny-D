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

// add each person to div

buildResults(findUser(’sophia’))