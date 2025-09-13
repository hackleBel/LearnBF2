document.querySelector(".discord").onclick = function () {
  window.open("https://discord.gg/W2JNJMah");
};
document.querySelector(".nexus").onclick = function () {
  window.open(
    "https://www.nexusmods.com/games/starwarsbattlefront22017/mods?timeRange=allTime"
  );
};

document.addEventListener("DOMContentLoaded", () => {
  // Маппинг карт на соответствующие изображения
  const mapImageMap = {
    "map-kamino":
      "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    "map-tatooine_m": "images/img/maps/tatooine_m.png",
    "map-nabo_h": "images/img/maps/nabo_h.png",
    "map-hoth": "images/img/maps/hoth.png",
    "map-takodana_c": "images/img/maps/takodana_c.png",
    "map-death_star": "images/img/maps/death_star.png",
    "map-yavin": "images/img/maps/yavin.png",
    "map-starkiller": "images/img/maps/starkiller.png",
    "map-endor": "images/img/maps/endor.png",
    "map-kashyyyk":
      "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    "map-jakku_c":
      "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    "map-bespin":
      "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    "map-palacio_de_jabba":
      "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    "map-kessel":
      "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    "map-geonosis_t": "images/img/maps/geonosis_t.png",
    "map-ajan_kloss": "images/img/maps/ajan_kloss.png",
    "map-geonosis_d": "images/img/maps/geonosis_d.png",
    "map-nabo_s":
      "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    "map-felucia": "images/img/maps/felucia.png.png",
    "map-takodana_m":
      "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    "map-jakku_s":
      "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    "map-crait": "images/img/maps/crait.png",
    "map-scraif": "images/img/maps/scarif.png",
  };

  // Создаем модальное окно
  const modal = document.createElement("div");
  modal.className = "map-modal";
  modal.innerHTML = `
   <div class="modal-content">
     <span class="modal-close">&times;</span>
     <img class="modal-image" src="" alt="">
   </div>
 `;
  document.body.appendChild(modal);

  // Функция проверки мобильного устройства
  function isMobile() {
    return window.innerWidth <= 600;
  }

  // Функция открытия модального окна
  function openModal(imageUrl) {
    const modalImage = modal.querySelector(".modal-image");
    modalImage.src = imageUrl;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  // Функция закрытия модального окна
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Обработчики для модального окна
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Обработчик клавиши ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });

  // Обработчик кликов по картам
  document.querySelectorAll(".map-card_link").forEach((card) => {
    card.addEventListener("click", () => {
      const mapClass = card.classList[1];
      const imageUrl = mapImageMap[mapClass];

      if (isMobile()) {
        // На мобильных - открываем полноэкранный режим
        openModal(imageUrl);
      } else {
        // На десктопе - просто меняем основное изображение
        const imgElement = document.querySelector(".map-hs-img");
        if (imgElement) {
          imgElement.src = imageUrl;
        }
      }
    });
  });

  // Закрываем модальное окно при изменении размера на десктоп
  window.addEventListener("resize", () => {
    if (!isMobile() && modal.style.display === "flex") {
      closeModal();
    }
  });
});

const supremacy = document.querySelector(".multiplayer-supremacy");
const hav = document.querySelector(".multiplayer-hero_and_villains");

const hs = document.querySelector(".multiplayer-hero_showdown");
const hvv = document.querySelector(".multiplayer-hero_vs_villains");

const main = document.querySelector(".multiplayer-cards_main");
const saber = document.querySelector(".multiplayer-cards_saber");

const heroHS = document.querySelector(".multiplayer-hero_showdown-play");
const heroHVV = document.querySelector(".multiplayer-hvv-play");

const backMenu = document.querySelector(".multiplayer-back-menu");
const backMult = document.querySelector(".multiplayer-back_mult");
const backSaber = document.querySelector(".multiplayer-back_saber");

supremacy.onclick = function () {
  main.style.display = "none";

  backMult.style.display = "none";
};
backMult.onclick = function () {
  main.style.display = "flex";

  backMult.style.display = "none";
};

hav.onclick = function () {
  main.style.display = "none";

  saber.style.display = "flex";

  backMenu.style.display = "flex";
};
backMenu.onclick = function () {
  saber.style.display = "none";

  main.style.display = "flex";

  backMenu.style.display = "flex";
};

hs.onclick = function () {
  heroHS.style.display = "flex";

  saber.style.display = "none";

  backMenu.style.display = "none";

  backSaber.style.display = "flex";
};

backSaber.onclick = function () {
  heroHS.style.display = "none";
  
  heroHVV.style.display = "none";

  saber.style.display = "flex";

  backMenu.style.display = "flex";

  backSaber.style.display = "none";
}

hvv.onclick = function () {
  heroHVV.style.display = "flex";

  saber.style.display = "none";

  backMenu.style.display = "none";

  backSaber.style.display = "flex";
}