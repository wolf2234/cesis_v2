const formInputs = document.querySelectorAll(".form__input");

formInputs.forEach(function (formInput) {
    formInput.addEventListener("change", function (element) {
        if (formInput.value != "") {
            formInput.classList.add("valid");
        } else {
            formInput.classList.remove("valid");
        }
    });
});
