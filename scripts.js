console.log('Code!')

// //test
// function findUser (names) {
//     let outName = []
//     for (let name of names) {
//         if (name.first === first) { 
//             outName.push(name)
//         }
//     }
//     return outName
// }

// function buildResults (resultsArray){
//     for (let name of resultsArray){
//         let newDiv = document.createElement('div')
//         newDiv.innerText = `${name.name}`
//         resultsDiv.appendChild(newDiv)
//     }
// }

// // add each person to div

// buildResults(findUser(’sophia’))


//test2

const root = document.getElementById('root');
console.log('Did you find me?')

for(let customer of customers) {
    console.log(customer);
    const customerCard = document.createElement('div');
    customerCard.classList.add('customer-card');

    root.appendChild(customerCard);
    customerCard.innerHTML =` 
    <img src="${customer.picture.large}"/>
    <p> ${customer.email}<p>
    <p class="name">${customer.name.title} ${customer.name.first} ${customer.name.last}</p>
    <p>${customer.location.street.number} ${customer.location.street.name}.</p>
    <p>${customer.location.city} ${customer.location.state}, ${customer.location.postcode}</p>
    <p>DOB: C${customer.dob.date}</p>
    <p>Customer since: ${customer.registered.date}</p>
    `
};