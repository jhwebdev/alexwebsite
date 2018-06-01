// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





var RSGButton = document.getElementById("RSGButton");
RSGButton.onclick = function() {

  var Noun = ["A child", "Alex","Gabe","Greg","A father", "A mother"];
  var Action = ["summoned a portal to hell", "dug a grave", "created a nuclear fusion reactor"];
  var Place = ["at home", "at a nearby park", "on an island", "at a public school"];
  var Time = ["after probation","after their child ran away from home"];

  myNoun = Noun[Math.round(Math.random()*(Noun.length-1))];
  myAction = Action[Math.round(Math.random()*(Action.length-1))];
  myPlace = Place[Math.round(Math.random()*(Place.length-1))];
  myTime = Time[Math.round(Math.random()*(Time.length-1))];

  document.getElementById("RSGNoun").innerHTML = myNoun;
  document.getElementById("RSGAction").innerHTML =myAction;
  document.getElementById("RSGPlace").innerHTML = myPlace;
  document.getElementById("RSGTime").innerHTML = myTime;

}