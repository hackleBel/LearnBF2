const Nset = document.querySelector(".nav__setting");
const Nperk = document.querySelector(".nav__perks");

const main = document.querySelector(".main");
const perk = document.querySelector(".perk");
const set = document.querySelector(".setting");

Nset.onclick = function () {
  main.style.display = "none";
  perk.style.display = "none";
  set.style.display = "flex";
};

Nperk.onclick = function () {
 main.style.display = "none";
 set.style.display = "none";
 perk.style.display = "flex";
}

const mapsData = {
    left: [
        "Kamino",
        "Tatooine Mos Eisley", 
        "Nabo Hangar Real",
        "Hoth",
        "Takodana",
        "Dearth Star II",
        "Yavin 4",
        "Base Starkiller",
        "Endor",
        "Kashyyyk",
        "Jakku Cemeterio",
        "Bespin"
    ],
    right: [
        "Palacio de Jabba",
        "Kessel",
        "Geonosis Tripa",
        "Ajian Kloss",
        "Geonosis Dreadnought",
        "Nabo Ship",
        "Felucia",
        "Takidana MC85",
        "Jakku Ship",
        "Crait",
        "Scarif"
    ]
};

const container = document.getElementById('mapsContainer');

container.innerHTML = `
    <div class="maps_left">
        ${mapsData.left.map(map => `<div class="main_map">${map}</div>`).join('')}
    </div>
    <div class="maps_right">
        ${mapsData.right.map(map => `<div class="main_map">${map}</div>`).join('')}
    </div>
`;

document.querySelector(".discord").onclick = function () {
 window.open("https://discord.gg/W2JNJMah");
};
document.querySelector(".nexus").onclick = function () {
 window.open(
   "https://www.nexusmods.com/games/starwarsbattlefront22017/mods?timeRange=allTime"
 );
};