


function ChangeFu() {
	document.getElementById('CycleColor').style.color = 'rgb(255,255,255)'; 
	document.getElementById('CycleColor').style.fontSize = '600px';
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*NavBarToggler*/
var NToggle  = document.querySelector('.ToggleHeader');
var NToggleBar  = document.querySelector('.ToggleHeaderDisplay');
var NToggleNavbar  = document.querySelector('.navbarToggle');
var NTopBar  = document.querySelector('.TopBar');
NToggle.onclick = function()
{
	NTopBar.setAttribute("style","display:grid");
	NToggleBar.setAttribute("style","display:none");
}
NToggleNavbar.onclick = function()
{
	NTopBar.setAttribute("style","display:none");
	NToggleBar.setAttribute("style","display:block");
}