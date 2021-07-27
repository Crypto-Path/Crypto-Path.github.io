var body = document.getElementsByTagName("body")[0];

var monsterHolder = document.createElement("div");

var infoPanel = document.createElement("div");
var monsterNameHolder = document.createElement("div");
var monsterName = document.createElement("p");
var monsterDescHolder = document.createElement("div");
var monsterDesc = document.createElement("p");
var monsterStatHolder = document.createElement("div");
var monsterStats = document.createElement("p");
var mainImage = document.createElement("img");

body.appendChild(infoPanel);
body.appendChild(monsterHolder);

mainImage.id="img";

document
	mainImage
	.addEventListener("mouseover", function( event ) {
		mainImage.style.borderRadius = "20px";
		
		document
			mainImage
			.addEventListener("mouseout", function( event ) {
				mainImage.style.borderRadius = "10px";
			}, false)
	}, false)