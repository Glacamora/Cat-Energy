// При событии загрузки страницы и при событии изменения размера экрана изменялся базовый размер толстокота
document.addEventListener("DOMContentLoaded", ready);

window.addEventListener("resize", ready);

function ready() {
  var w = document.documentElement.clientWidth;
  var cat = document.querySelector(".example__img_before");

  cat.style.width = w + "px";
}
