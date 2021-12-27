let navButtons = document.querySelectorAll(".navigator");

navButtons.forEach(button => button.addEventListener("click", () => {
    navButtons.forEach(button => button.style = "background-color: white");
    button.style = "background-color: black";
}));