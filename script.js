const header = document.querySelector(".container-head");

const navBtns = document.querySelector(".nav-btns");
const allContainers = document.querySelectorAll(".container");

function hideAllContainers() {
  allContainers.forEach((container) => {
    container.style.display = "none";
  });
}

navBtns.addEventListener("click", function (event) {
  if (event.target.classList.contains("nav-btn")) {
    const targetSelector = event.target.dataset.target;
    const targetContainer = document.querySelector(targetSelector);

    if (targetContainer) {
      hideAllContainers();
      targetContainer.style.display = "flex";
      header.style.display = "none";
    }
  }
});

hideAllContainers();

document.querySelector(".nav-navigation").onclick = function () {
  navBtns.style.display = navBtns.style.display === "none" ? "flex" : "none";
};

document.querySelector(".settings-btn-dark").onclick = function () {
  document.body.className = "darkTheme";
};
document.querySelector(".settings-btn-light").onclick = function () {
  document.body.className = "lightTheme";
};
