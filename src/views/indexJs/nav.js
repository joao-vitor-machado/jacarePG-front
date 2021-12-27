nav1.classList.add("nav-clicked");


let navButtons = document.querySelectorAll(".navigator");

navButtons.forEach(button => button.addEventListener("click", () => {
    navButtons.forEach(button => {
        button.classList.remove("nav-clicked");
        button.classList.add("nav-unclicked");
    });
    button.classList.remove("nav-unclicked");
    button.classList.add("nav-clicked");
}));