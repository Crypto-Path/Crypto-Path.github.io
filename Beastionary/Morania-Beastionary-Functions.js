var amount = 0;
function addBeast(name,CTV,IMG,Class,Desc,HP,ATK,DEF,Ability,Drops,Rarity) {
	var Div = document.createElement("div");
	var Holder = document.createElement("div");
	var TextHolder = document.createElement("div");
	var Name = document.createElement("p");
	var ctv = document.createElement("p");
	var Image = document.createElement("img");
	
	Image.src = IMG;
	Image.style.margin = "auto";
	Image.style.borderRadius = "5px";
	//Image.id = ID+1000;
	
	Name.innerHTML = name;
	
	
	amount++;
	ctv.innerHTML = CTV;
	Div.id = amount;
	Div.name = "monster";
	Div.classList.add(Class);
	Div.class = "Slime";
	Div.style.width = "5%";
	Div.style.margin = "15";
	Div.style.float = "left";
	Div.style.fontSize = "12px";
	//Div.style.fontSize = "75%";
	Div.style.textAlign = "center";
	Div.style.borderRadius = "10px";
	Div.style.cursor = "pointer";
	Div.style.position = "relative";
	
	monsterHolder.appendChild(Div);
	Div.appendChild(Holder);
	Holder.appendChild(Image);
	Holder.appendChild(TextHolder);
	TextHolder.appendChild(Name);
	TextHolder.appendChild(ctv);
	
	Div.style.width = "5%";
	Div.style.height = "22%";
	Image.style.width = "90%";
	Image.style.height = "35%";
	
	var drops = "Drops: " + Drops
	
	if (Rarity == "0")
		Div.style.backgroundColor = "#808080";
	else if (Rarity == "1")
		Div.style.backgroundColor = "#80F080";
	else if (Rarity == "2")
		Div.style.backgroundColor = "#8080F0";
	else if (Rarity == "3")
		Div.style.backgroundColor = "#F08080";
	else if (Rarity == "4")
		Div.style.backgroundColor = "#800F80";
	
	var stats = "HP:"+HP+"<br>ATK:"+ATK+"<br>DEF:"+DEF+"<br><strong>Ability:</strong><br>"+Ability;
	if (Ability == "")
		stats = "HP:"+HP+"<br>ATK:"+ATK+"<br>DEF:"+DEF;
	if (Drops == "")
		drops = "Drops: Unset";
	document
		//.getElementById(ID)
		Div
		.addEventListener("click",function(){
			beastInfo(
				name,
				Desc,
				stats,
				IMG,
				drops
			);
		}, 
	false);
	document
		//.getElementById(ID)
		Div
		.addEventListener("mouseover", function( event ) {
			var Beast = Div
			var BeastIMG = Image
			Beast.style.borderRadius = "20px";
			BeastIMG.style.borderRadius = "20px";
			
			//Beast.style.width = "6%";
			//Beast.style.height = "22%";
			
			Image.style.width = "90%";
			Image.style.height = "40%";
			
			document
				//.getElementById(ID)
				Div
				.addEventListener("mouseout", function( event ) {
					Beast.style.borderRadius = "10px";
					BeastIMG.style.borderRadius = "10px";
					//Beast.style.width = "5%";
					Image.style.height = "35%";
				}, 
			false)
		},
	false)
}

function removeBeast(Beast) {
	var element = document.getElementById(Beast);
	element.parentNode.removeChild(element);
}

function beastInfo(name,desc,stats,IMG,Drops) {
	monsterName.innerHTML = "<strong>Monster Name:<br></strong>" + name;
	monsterDesc.innerHTML = "<strong>Monster Description:<br></strong>" + desc;
	monsterStats.innerHTML = "<strong>Monster Stats:<br></strong>" + stats;
	mainImage.src = IMG;
	mainImage.title = Drops;
}

function Select(Class) {
	document.getElementsByClassName(Class)[0].style.visibility='hidden';
}