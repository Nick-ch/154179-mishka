var popup_link = document.querySelector(".btn--order");
var popup = document.querySelector(".modal");
var popup_overlay = document.querySelector(".modal__overlay");


popup_link.addEventListener("click", function(event){
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  popup.classList.add("modal--displayed");
  popup_overlay.classList.add("modal__overlay--displayed");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal--displayed")){
      popup.classList.remove("modal--displayed");
      popup_overlay.classList.remove("modal__overlay--displayed");
    };
  };
});

// Два верхних абзаца скопированы с Нёрдс. А вот ниже я пытался сделать закрытие поп-апа при клике по оверлею.

popup_overlay.addEventListener("close", function(event){
  if (event.CLICK == 1){
    popup.classList.remove("modal--displayed");
    popup_overlay.classList.remove("modal__overlay--displayed");
  };
});
