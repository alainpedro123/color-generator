var colorResult = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setBackgtroundColor(){
	body.style.background = "linear-gradient(to right," + color1.value + ", " +  color2.value + ")";
	colorResult.textContent = body.style.background + ";";
}
color1.addEventListener("input", setBackgtroundColor);
color2.addEventListener("input", setBackgtroundColor);
