// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    //Tests if input is empty
    if(testInput == ''){
        return("Empty")
    }

    //Assigns isNaN to a variable (I find this easier to work with)
    let isnotNumber = isNaN(testInput);

    //Checks if input is a number or not
    if(isnotNumber === true){
        return("Not a Number");
    }
    else if(isnotNumber === false){
        return("Is a Number");
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if(validateInput(pilot) === 'Empty' || validateInput(copilot) === `Empty` || validateInput(fuelLevel) === `Empty` || validateInput(cargoLevel)){
        alert("One of your fields is empty. All fields must be filled out.")
    }








    pilotStatus.innerHTML = `${pilot} is ready for launch`;
    copilotStatus.innerHTML = `${copilot} is ready for launch`;










    //Test code for collecting input from text box
    //document.getElementById("searchTxt").value;
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;