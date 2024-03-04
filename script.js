class Card {
    constructor(imageSrc, title, description, link) {
        this.imageSrc = imageSrc;
        this.title = title;
        this.description = description;
        this.link = link;
    }
}

const cards = [
    new Card("images/prosodyBanner.png", "Prosody", "Prosody is a 4-key Vertical Scrolling Rhythm Game (VSRG) developed by Cyphe Mercury. In Prosody, players synchronize their actions with scrolling notes to the beat of the music. The game offers an intuitive gameplay experience with a dynamic soundtrack.<br><br>Players can compete for top rankings and claim their spot on the leaderboards. Prosody welcomes players of all skill levels, providing an inclusive space to test reflexes and enjoy the rhythm.<br><br>(Server currently down - Status : unplayable)", "https://cyphemercury.online/Aria-Engine-Prosody/"),
    new Card("images/4wlBanner.png", "4-Letter Words", "4-Letter Words is a word game developed by Cyphe Mercury for the 2023 FBLA Computer Game & Program Simulation competition, drawing inspiration from Wordle. Players aim to decipher hidden words within a 10-minute timeframe, competing on a local leaderboard.<br><br>Challenge your vocabulary skills and enjoy the competitive gameplay offered by 4-Letter Words.", "https://schiytu37.itch.io/4-letter-words"),
    new Card("images/moraniaIdleBanner.png", "Morania Idle", "Morania Idle is an incremental idle game set in the fictional world of Morania. Players progress through the game by completing quests, defeating monsters, and crafting items. The game features various mechanics such as leveling up, upgrading equipment, and unlocking new abilities. Players can gather resources, explore different regions, and engage in battles to advance. The game employs a simple interface and relies heavily on incremental progress, encouraging players to strategize and optimize their gameplay to achieve higher levels and unlock new content.", "https://cyphemercury.online/Morania-Idle--Rewrite/"),
    new Card("images/agiBanner.png", "Adventurer's Guild Incremental", "Adventurer's Guild Incremental offers players the opportunity to construct and develop their very own guild, where adventurers can be enlisted to embark on quests, gather valuable materials, and engage in combat to secure riches. Witness the growth of your guild members as they evolve, equipping themselves with gear obtained from shops or acquired through monster drops. With an emphasis on enjoyment and exploration, embark on a journey of discovery within the game's open world.", "https://schiytu37.itch.io/adventurers-guild-incremental"),
    new Card("images/gtrawBanner.png", "Grinding to Rule Another World", "Grinding to Rule Another World is an 'Idling to rule the gods' Like game, with a more rpg like twist to it.", "https://cyphemercury.online/Grinding-to-rule-the-world/"),
    new Card("images/craftingOdysseyBanner.png", "Crafting Game", "In Crafting Odyssey, players are presented with a 5x5 crafting grid and tasked with deciphering complex crafting recipes. The game features a community-driven approach to discovery, where players collaborate to uncover hidden recipes through experimentation. With an emphasis on intricate crafting mechanics, Crafting Odyssey offers an extremely challenging experience for players seeking to torture themselves.", "https://cyphemercury.online/Crafting-Game/"),
];

const cardContainer = document.getElementById("cardContainer");

cards.forEach((card, index) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
      <img class="card-image" src="${card.imageSrc}" alt="${card.title}">
      <div class="card-content">${card.title}</div>
  `;
    newCard.addEventListener("click", () => openModal(index));
    cardContainer.appendChild(newCard);
});

function openModal(index) {
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");
    const modalBackground = document.getElementById("modal-background");
    const modal = document.getElementById("modal");
    modal.style.backgroundImage = "url('" + cards[index].imageSrc + "')";

    modalTitle.textContent = cards[index].title;
    modalDescription.innerHTML = cards[index].description;
    modalLink.href = cards[index].link;

    modalBackground.classList.add("active");
    modal.classList.add("active");

    modalBackground.addEventListener("click", closeModalOutside);
}

function closeModal() {
    const modalBackground = document.getElementById("modal-background");
    const modal = document.getElementById("modal");

    modalBackground.classList.remove("active");
    modal.classList.remove("active");

    modalBackground.removeEventListener("click", closeModalOutside);
}

function closeModalOutside(e) {
    if (e.target === modalBackground) {
        closeModal();
    }
}

const closeButton = document.getElementById("close-modal");
if (closeButton) {
    closeButton.addEventListener("click", closeModal);
}