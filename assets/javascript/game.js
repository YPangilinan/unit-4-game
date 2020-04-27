$(document).ready(function(){

//target number should be between 19-120
var targetNumber = Math.floor(Math.random()*101+19);

//random number for each of the flowers. number should be between 1 and 12
var flower1 = Math.floor(Math.random()*11+1);
var flower2 = Math.floor(Math.random()*11+1);
var flower3 = Math.floor(Math.random()*11+1);
var flower4 = Math.floor(Math.random()*11+1);

// console.log(flower1);
// console.log(flower2);
// console.log(flower3);
// console.log(flower4);

//counter variables
var totalCost = 0;
var wins = 0;
var losses = 0;

//add to the DOM
$("#totalcost").html("Bouquet Cost Target:  <br/>" + targetNumber);

//general win function to call for each flower
function pickedFlower(){
    alert("The bouquet is yours!");
    wins++;
    $("#wins").html("Bouquets Bought: </br>" + wins);
}

//general loss function to call for each flower
function returnedFlower(){
    alert("Sorry! Please put the flowers back");
    losses++;
    $("#losses").html("Bouquets Returned: </br>" +losses);
}

//reset function after each win or loss;
function reset(){
    targetNumber = Math.floor(Math.random()*101+19);
    flower1 = Math.floor(Math.random()*11+1);
    flower2 = Math.floor(Math.random()*11+1);
    flower3 = Math.floor(Math.random()*11+1);
    flower4 = Math.floor(Math.random()*11+1);
    totalCost = 0;
    $("#totalScore").html("Current Bouquet Total:  <br/>" + totalCost);
    $("#totalcost").html("Bouquet Cost Target:  <br/>" + targetNumber);
}

//on click for each of the flowers

//flower 1
$("#flower1").on("click", function(){
    totalCost = totalCost + flower1;
    $("#totalScore").html("Current Bouquet Total:  <br/>" + totalCost);

    //apply win+loss function

    if (totalCost === targetNumber){
        pickedFlower();
        reset();
    }

    else if (totalCost > targetNumber){
        returnedFlower();
        reset();
    }
})

//flower 2
$("#flower2").on("click", function(){
    totalCost = totalCost + flower2;
    $("#totalScore").html("Current Bouquet Total:  <br/>" + totalCost);

    //apply win+loss function

    if (totalCost === targetNumber){
        pickedFlower();
        reset();
    }

    else if (totalCost > targetNumber){
        returnedFlower();
        reset();
    }
})

//flower 3
$("#flower3").on("click", function(){
    totalCost = totalCost + flower3;
    $("#totalScore").html("Current Bouquet Total:  <br/>" + totalCost);

    //apply win+loss function

    if (totalCost === targetNumber){
        pickedFlower();
        reset();
    }

    else if (totalCost > targetNumber){
        returnedFlower();
        reset();
    }
})


//flower 4
$("#flower4").on("click", function(){
    totalCost = totalCost + flower4;
    $("#totalScore").html("Current Bouquet Total:  <br/>" + totalCost);

    //apply win+loss function

    if (totalCost === targetNumber){
        pickedFlower();
        reset();
    }

    else if (totalCost > targetNumber){
        returnedFlower();
        reset();
    }
})


});

