var headerWrap = document.querySelector(".page-header__wrapper");
var navToggle = document.querySelector(".page-header__toggle");
var header = document.querySelector(".page-header");

header.classList.remove("page-header--nojs");
headerWrap.classList.remove("page-header__wrapper--nojs");
headerWrap.classList.remove("page-header__wrapper--opened");
navToggle.classList.remove("page-header__toggle--nojs");
headerWrap.classList.add("page-header__wrapper--closed");

navToggle.addEventListener("click", function () {
  "use strict";
  if (headerWrap.classList.contains("page-header__wrapper--closed")) {
    headerWrap.classList.remove("page-header__wrapper--closed");
    headerWrap.classList.add("page-header__wrapper--opened");
  } else {
    headerWrap.classList.add("page-header__wrapper--closed");
    headerWrap.classList.remove("page-header__wrapper--opened");
  }
});
