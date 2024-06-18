import { createCustomSelect } from "../modules/select-custom.js";

createCustomSelect(".select");

// const selects = document.querySelectorAll(".select-custom");
// const selectsItems = document.querySelectorAll(".select-custom__item");

// selects.forEach(function (select) {
//     select.addEventListener("click", function (option) {
//         select.classList.toggle("is-active");
//     });
// });

// selectsItems.forEach(function (selectItem) {
//     selectItem.addEventListener("click", function (selectOption) {
//         let text = selectItem.innerText;
//         let currentText = selectItem
//             .closest(".select-custom")
//             .querySelector(".select-custom__value");
//         currentText.innerText = text;
//     });
// });

// const select = document.querySelector(".select");
// let selectCustom = document.createElement("div");
// selectCustom.className = "select-custom";
// selectCustom.innerHTML =
//     '<div class="select-custom__body"><div class="select-custom__current">Your budget</div><div class="select-custom__icon"></div></div><div class="select-custom__items"><div class="select-custom__item">Your budget</div><div class="select-custom__item">1</div><div class="select-custom__item">2</div><div class="select-custom__item">3</div></div>';
// select.insertAdjacentElement("afterend", selectCustom);
