


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

var secretChange1 = document.querySelector('.secretOne');
var secretClick1 = 0;
secretChange1.onclick = function()
{
	secretClick1++;
	if (secretClick1 === 1)
	{
		alert("Hi");
	}
	if (secretClick1 === 10)
	{
		secretChange1.textContent = "^.^";
		alert("Stop");
	}
	else if (secretClick1 === 20)
	{
		alert('Really Stop (Im going to die)');
	}
	else if (secretClick1 >= 30)
	{
		secretChange1.textContent = "X_X";
		alert('X_X');
		secretClick1 = 30;
	}
}

var secretChange2 = document.querySelector('.secretTwo');
var secretChange2Text = document.querySelector('.secretTwoText');
secretChange2.onclick = function()
{
	if(secretClick1 >= 30)
	{
		alert("Enter?");
		secretChange2Text.setAttribute("style", "display:block;");
		secretChange2Text.textContent = "*Walk in*";
	}
	else
	{
		alert("^.^ Sorry You are not qualified to enter");
	}
}


var secretFinale = document.getElementById('secretFin');



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("SlidesImage");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "")
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}


/*ClickerGame*/



var CBuys = 0;
var CHelperInterval = 1000;
var CHelperClickOnce = false;
var CBuyTrophiesLevel = 0;
var CBuyHelperLevel = 0;
var CBuyIncreaseLevel = 0;
var CBuyTrophiesPrice = 150;
var CBuyHelperPrice = 100;
var CBuyIncreasePrice = 10;

var CBuyTrophiesLevelUI = document.querySelector('.ClickerTrophyLevel');
var CBuyHelperLevelUI = document.querySelector('.ClickerHelperLevel');
var CBuyIncreaseLevelUI = document.querySelector('.ClickerIncreaseLevel');

var CBuyTrophiesPriceUI = document.querySelector('.ClickerTrophyPrice');
var CBuyHelperPriceUI = document.querySelector('.ClickerHelperPrice');
var CBuyIncreasePriceUI = document.querySelector('.ClickerIncreasePrice');

var CBuyTrophiesUI = document.querySelector('.ClickerTrophy');
var CBuyHelperUI = document.querySelector('.ClickerHelper');
var CBuyIncreaseUI = document.querySelector('.ClickerIncrease');
var ClickCount = 0;
var CDisplay = document.querySelector('.UserClicks');
var CButton = document.querySelector('.ClickerButton');
CButton.onclick = function()
{
	for(var i = 0; i < CBuyIncreaseLevel+1; i++){
		ClickCount++;
	}
	CDisplay.textContent = ClickCount;
}
CBuyTrophiesUI.onclick = function()
{
	if(ClickCount >= CBuyTrophiesPrice)
	{
		ClickCount -= CBuyTrophiesPrice;
		CBuyTrophiesLevel++;
		CBuyTrophiesPrice *= 6;
		CBuyTrophiesLevelUI.textContent = CBuyTrophiesLevel;
		CBuyTrophiesPriceUI.textContent = CBuyTrophiesPrice;
		CDisplay.textContent = ClickCount;
	}
}
CBuyHelperUI.onclick = function()
{
	if(ClickCount >= CBuyHelperPrice)
	{
		ClickCount -= CBuyHelperPrice;
		CBuyHelperLevel++;
		CBuyHelperPrice *= 4;
		CBuyHelperLevelUI.textContent = CBuyHelperLevel;
		CBuyHelperPriceUI.textContent = CBuyHelperPrice;
		CDisplay.textContent = ClickCount;
		if(CHelperClickOnce === false)
		{
			setTimeout(CHelper,CHelperInterval);
			CHelperClickOnce = true;
		}
	}
}
CBuyIncreaseUI.onclick = function()
{
	if(ClickCount >= CBuyIncreasePrice)
	{
		ClickCount -= CBuyIncreasePrice;
		CBuyIncreaseLevel++;
		CBuyIncreasePrice *= 2;
		CBuyIncreaseLevelUI.textContent = CBuyIncreaseLevel;
		CBuyIncreasePriceUI.textContent = CBuyIncreasePrice;
		CDisplay.textContent = ClickCount;
		
		CBuyIncreaseUI.setAttribute("style","background-color: rgba(20, 20, 20, 0.5)");
	}
}

function CHelper()
{
	for(var i = 0; i < CBuyHelperLevel; i++){
		ClickCount++;
	}
	CDisplay.textContent = ClickCount;
	setTimeout(CHelper,CHelperInterval);
}