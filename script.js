// Write your JavaScript code here!

window.addEventListener("load", function() {

    //cargoStatus.innerHTML;

    //let form = document.getElementById("formSubmit");



    //A friend of mine helped me out with this. I'm honestly not sure where "form" comes from here. As far as I can tell, the name of the submit button is "formSubmit". Is there something fundamental I'm missing?
    //My only theory is that this refers to the whole form div on the HTML file, while listening for the submit button listens specifically for clicking "formSubmit".

    //Sets form to the submit button
    const form = document.querySelector("form")

    //Event listener for clicking the submit button
    form.addEventListener("submit", function(event){
        
        event.preventDefault();

        //Upon clicking submit, collect all inputs from text boxes
        
        /*let pilot = document.querySelector("pilotName").value;
        let copilot = document.querySelector("copilotName").value;
        let fuelLevel = document.querySelector("fuelLevel").value;
        let cargoMass = document.querySelector("cargoMass").value;
        let list = document.getElementById("faultyItems");*/

        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");


        //Running formSubmission 

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

 
    })


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
        
    })



    
 });