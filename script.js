const mainWrap = document.querySelector(".main-wrap");
const searchWrap = document.querySelector(".search");
const btnIcon = document.querySelector(".btn");
const searchField = document.querySelector(".input");

btnIcon.addEventListener("click", () => {
    searchWrap.classList.toggle("active");
    searchField.focus();
}, false)