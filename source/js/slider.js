// При событии загрузки страницы и при событии изменения размера экрана изменялся базовый размер толстокота
document.addEventListener("DOMContentLoaded", ready);

window.addEventListener("resize", ready);

function ready() {
  var w = document.documentElement.clientWidth;

  if (w < 768) {
    w = w - (20 * 2);
  }
  else if (w < 1440) {
    w = w - (30 * 2);
  }
  else {
    w = w - (70 * 2);
  }

  var cat = document.querySelector(".example__img_before");

  cat.style.width = w + "px";
}
