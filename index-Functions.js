function makeCatagory(name, amount, option1, location1, option2, location2, option3, location3, option4, location4) {

    var Div = document.createElement("div");
    var TextContainerHolder = document.createElement("div");
    var TextContainer = document.createElement("a");
    var Text = document.createElement("font");

    Text.innerHTML = name;

    TextContainerHolder.style.padding = '5%';
    TextContainerHolder.style.margin = 'left';

    Div.id = ID;
    Div.style.cursor = "pointer";
    Div.style.float = "left";
    Div.style.backgroundColor = '#808080';
    Div.style.width = 100 / 3 - 1 + "%";
    Div.style.textAlign = 'center';
    Div.style.margin = '0.5%';
    Div.style.borderRadius = "10px";

    catagoryContainer.appendChild(Div);
    Div.appendChild(TextContainerHolder);
    TextContainerHolder.appendChild(TextContainer);
    TextContainer.appendChild(Text);

    document
        .getElementById(ID)
        .addEventListener("click", function(event) {
            dropDown(amount, option1, location1, option2, location2, option3, location3, option4, location4);
        }, false)
    document
    Div
        .addEventListener("mouseover", function(event) {

                Div.style.backgroundColor = "#606060";

                document
                Div
                    .addEventListener("mouseout", function(event) {
                            Div.style.backgroundColor = "#808080";
                        },
                        false)
            },
            false)
    ID++;
}

function dropDown(amount, option1, location1, option2, location2, option3, location3, option4, location4) {
    var menu = document.getElementsByTagName("div")[0];

    var holder = menu.getElementsByTagName("div")[0];
    var content = menu.getElementsByTagName("div")[0].getElementsByTagName("a")[0].getElementsByTagName("font")[0];

    menu.style.display = "block";
    menu.style.position = 'absolute';

    holder.style.margin = '0.5%';
    holder.style.float = 'left';
    holder.style.paddingRight = '0.5%';
    holder.style.paddingLeft = '0.5%';
    holder.style.backgroundColor = '#909090';
    holder.style.borderRadius = '10px';
    holder.style.width = '98%';
    holder.style.height = '80%';

    content.innerHTML = "";

    if (amount == "4")
        content.innerHTML += "<a href='" + location1 + "'>" + option1 + "</a>" + "<br>" + "<a href='" + location2 + "'>" + option2 + "</a>" + "<br>" + "<a href='" + location3 + "'>" + option3 + "</a>" + "<br>" + "<a href='" + location4 + "'>" + option4 + "</a>" + "<br>";
    else if (amount == "3")
        content.innerHTML += "<a href='" + location1 + "'>" + option1 + "</a>" + "<br>" + "<a href='" + location2 + "'>" + option2 + "</a>" + "<br>" + "<a href='" + location3 + "'>" + option3 + "</a>";
    else if (amount == "2")
        content.innerHTML += "<a href='" + location1 + "'>" + option1 + "</a>" + "<br>" + "<a href='" + location2 + "'>" + option2 + "</a>";
    else if (amount == "1")
        content.innerHTML += "<a href='" + location1 + "'>" + option1 + "</a>";
}

function close() {
    var menu = document.getElementsByTagName("div")[0];

    menu.style.display = "none";
}
document
    .getElementById("371")
    .addEventListener("click", function(event) {
        close();
    }, false)

function createGroup(title, desc) {
    var GroupHolder = document.getElementById("Callings");

    var MainHolder = document.createElement("div");
    var TitleHolder = document.createElement("h3");
    var DescHolder = document.createElement("div");
    var Desc = document.createElement("p");

    MainHolder.style.backgroundColor = "#909090";
    MainHolder.style.borderRadius = "10px";
    MainHolder.style.textAlign = "center";

    TitleHolder.innerHTML = "[" + title + "]";

    DescHolder.style.backgroundColor = "#9f9f9f";
    DescHolder.style.borderRadius = "10px";
    DescHolder.style.textAlign = "center";

    Desc.innerHTML = desc;

    GroupHolder.appendChild(MainHolder);
    MainHolder.appendChild(TitleHolder);
    MainHolder.appendChild(DescHolder);
    DescHolder.appendChild(Desc);
}

function createUpdate(UpdateTitle, Ver, added, changed, plan, date) {
    var hidden = true;
    var GroupHolder = document.getElementById("Callings2");

    var MainHolder = document.createElement("div");
    var TitleHolder = document.createElement("h3");
    var DescHolder = document.createElement("div");
    var Added = document.createElement("p");
    var Changed = document.createElement("p");
    var Plan = document.createElement("p");

    MainHolder.style.backgroundColor = "#909090";
    MainHolder.style.borderRadius = "10px";
    MainHolder.style.textAlign = "center";
    MainHolder.style.cursor = 'pointer';

    TitleHolder.innerHTML = "[" + UpdateTitle + "]" + "<br>" + "(Ver." + Ver + ")" + "<br>" + "(Date:" + date + ")";

    DescHolder.style.backgroundColor = "#9f9f9f";
    DescHolder.style.borderRadius = "10px";
    DescHolder.style.textAlign = "left";

    Added.innerHTML = "<div style='background-color:#959595;'>Added:</div><br><br>" + added + "<br><br>";
    Changed.innerHTML = "<div style='background-color:#959595;'>Changed:</div><br><br>" + changed + "<br><br>";
    Plan.innerHTML = "<div style='background-color:#959595;'>Furture Update Plan:</div><br><br>" + plan + "<br><br>";

    GroupHolder.appendChild(MainHolder);
    MainHolder.appendChild(TitleHolder);
    MainHolder.appendChild(DescHolder);
    DescHolder.appendChild(Added);
    DescHolder.appendChild(Changed);
    DescHolder.appendChild(Plan);
    document
    MainHolder
        .addEventListener("click", function(event) {
            hidden = !hidden;
            if (hidden) {
                DescHolder.style.display = 'block';
            } else if (!hidden) {
                DescHolder.style.display = 'none';
            }
        }, false)
    document
    MainHolder
        .addEventListener("mouseover", function(event) {

                MainHolder.style.backgroundColor = "#606060";

                document
                MainHolder
                    .addEventListener("mouseout", function(event) {
                            MainHolder.style.backgroundColor = "#909090";
                        },
                        false)
            },
            false)
}

function createGameUpdate(UpdateTitle, Ver, added, changed, plan, date) {
    var hidden = true;
    var GroupHolder = document.getElementById("Callings3");

    var MainHolder = document.createElement("div");
    var TitleHolder = document.createElement("h3");
    var DescHolder = document.createElement("div");
    var Added = document.createElement("p");
    var Changed = document.createElement("p");
    var Plan = document.createElement("p");

    MainHolder.style.backgroundColor = "#909090";
    MainHolder.style.borderRadius = "10px";
    MainHolder.style.textAlign = "center";

    TitleHolder.innerHTML = "[" + UpdateTitle + "]" + "<br>" + "(Ver." + Ver + ")" + "<br>" + "(Date:" + date + ")";

    DescHolder.style.backgroundColor = "#9f9f9f";
    DescHolder.style.borderRadius = "10px";
    DescHolder.style.textAlign = "left";

    Added.innerHTML = "<div style='background-color:#959595;'>Added:</div><br><br>" + added + "<br><br>";
    Changed.innerHTML = "<div style='background-color:#959595;'>Changed:</div><br><br>" + changed + "<br><br>";
    Plan.innerHTML = "<div style='background-color:#959595;'>Furture Update Plan:</div><br><br>" + plan + "<br><br>";

    GroupHolder.appendChild(MainHolder);
    MainHolder.appendChild(TitleHolder);
    MainHolder.appendChild(DescHolder);
    DescHolder.appendChild(Added);
    DescHolder.appendChild(Changed);
    DescHolder.appendChild(Plan);

    document
    MainHolder
        .addEventListener("click", function(event) {
            hidden = !hidden;
            if (hidden) {
                DescHolder.style.display = 'block';
            } else if (!hidden) {
                DescHolder.style.display = 'none';
            }
        }, false)
    document
    MainHolder
        .addEventListener("mouseover", function(event) {

                MainHolder.style.backgroundColor = "#606060";

                document
                MainHolder
                    .addEventListener("mouseout", function(event) {
                            MainHolder.style.backgroundColor = "#909090";
                        },
                        false)
            },
            false)
}

function Switch(update) {
    var Caller2 = document.getElementById("Callings2");
    var Caller3 = document.getElementById("Callings3");

    if (update == "Game") {
        Caller2.style.display = "none";
        Caller3.style.display = "block";
    }
    if (update == "Web") {
        Caller2.style.display = "block";
        Caller3.style.display = "none";
    }
}