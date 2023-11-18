// Write your JavaScript code here!

window.addEventListener("load", function() {

    cargoStatus.innerHTML;


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })



    let list = document.getElementById("faultyItems");

    let form = document.getElementById("formSubmit");

    form.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");

        event.preventDefault();
    })
    
 });