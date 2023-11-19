// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.

    //Sets the html of missionTarget to the given formatting
    let missionTarget = document.getElementById("missionTarget");
    
    missionTarget.innerHTML = 
        `<h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name} </li>
                <li>Diameter: ${diameter} </li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance} </li>
                <li>Number of Moons: ${moons}</li>
            </ol>
        <img src=${imageUrl}></img>`
    }
 
 function validateInput(testInput) {
    //Tests if input is empty
    if(testInput == ''){
        return("Empty");
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

    //Initializing status variables
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    //Checks if any of the input boxes are empty
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("One of your fields is empty. All fields must be filled out.");
    }
    //Checks if all inputs are of the valid type (Only after inputs pass previous test)
    else if(validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
        alert("Input must be valid for all fields.");
    }
    //If all inputs pass both tests, change pilotStatus and copilotStatus to ready and include the inputted names
    else{
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = "hidden";

        //Checks if fuel level is too low
        if(fuelLevel < 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.style.color = "red";
        }
        //Checks if cargo level is too high
        else if(cargoLevel > 10000){
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.style.color = "red";
        }
        //Checks if both cargo level and fuel level are out of wack
        else if(cargoLevel > 10000 && fuelLevel < 10000){
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.style.color = "red";
        }
        //If shuttle passes all other checks, it is ready for launch
        else{
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.style.color = "green";
        }
    
    }

    //Test code for collecting input from text box
    //document.getElementById("searchTxt").value;
 }
 
 async function myFetch() {
     let planetsReturned;
 
     //Added link given in assignment as fetch location
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
            //Returns the response to the get request, json is used to access the json data within response
            return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    //RNG for picking planet
    let randomPlanet = Math.floor(Math.random() * 6);

    //Returns random planet selected by rng
    return planets[randomPlanet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;