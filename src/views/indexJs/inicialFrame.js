queroJogar.addEventListener("click", ()=>{
    buttons.removeChild(queroJogar);
    buttons.style = "height: 13em";

    let label = document.createElement("h5");
    label.textContent = "Insira seu zap para jogar";
    label.classList.add("label-jogar");
    buttonsDiv.appendChild(label);

    let field = document.createElement("input");
    field.type = "text";
    field.placeholder = "(xx)9xxx-xxxx";
    field.classList.add("field-jogar");
    buttonsDiv.appendChild(field);

    let button = document.createElement("button");
    button.textContent = "QUERO JOGAR";
    button.classList.add("button-jogar");
    buttonsDiv.appendChild(button);

});