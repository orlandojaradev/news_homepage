const d = document;

/** Mostrar u Ocultar Menu **/
function showHideMenu() {
  const $hideBody = d.querySelector(".shadow"),
    $menu = d.querySelector(".menu"),
    positionValue = getComputedStyle($menu).getPropertyValue("position");
  if (positionValue !== "static") {
    $hideBody.style.setProperty("display", "block");
    $hideBody.classList.toggle("hide-body");
    $menu.classList.toggle("translate");
  }
}

d.addEventListener("click", (e) => {
  if (
    e.target.matches(".btn-close-menu") ||
    e.target.matches(".menu a") ||
    e.target.matches(".btn-open-menu")
  ) {
    showHideMenu();
  }
});
