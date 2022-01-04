const btnSuperhero = document.querySelectorAll(".btn-superhero");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__content--close");

for (let i = 0; i < btnSuperhero.length; i++) {
    btnSuperhero[i].addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.classList.add("visible");
    });
}

closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("visible");
});