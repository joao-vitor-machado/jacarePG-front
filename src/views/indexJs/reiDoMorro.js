function showReiDoMorro(mapaObj){
    var blockedSecreen = document.createElement("div");
    blockedSecreen.className = "blocked-screen";
    body = document.querySelector("body");
    body.appendChild(blockedSecreen);

    let div = document.createElement("div");
    div.className = "img-label";
    blockedSecreen.appendChild(div);

    let img = document.createElement("img");
    img.src = "./shared/images/jacares/experiente.jfif";
    img.className = "img-fluid";
    img.id = "img-croc";
    div.appendChild(img);

    let label = document.createElement("h4");
    label.textContent = mapaObj.nomePlayer;
    div.appendChild(label);

    let buttonClose = document.createElement("button");
    buttonClose.className = "close-button";
    buttonClose.textContent = "Fechar";
    buttonClose.addEventListener("click", () => body.removeChild(blockedSecreen));
    blockedSecreen.appendChild(buttonClose);

}

 var mapas = [
     {
        img: "./shared/images/scenarios/lava.jpg",
        nome: "mapa 01",
        nomePlayer: "Sid",
        imgPlayer: "../shared/images/jacares/experiente.jfif"
    },
    {
        img: "./shared/images/scenarios/mountain.jpg",
        nome: "mapa 02",
        nomePlayer: "Vika",
        imgPlayer: "../shared/images/jacares/experiente.jfif"
    },
    {
        img: "./shared/images/scenarios/sea.jpg",
        nome: "mapa 03",
        nomePlayer: "Myrelle",
        imgPlayer: "../shared/images/jacares/experiente.jfif"
    },
    {
        img: "./shared/images/scenarios/lava.jpg",
        nome: "mapa 04",
        nomePlayer: "Bauducco",
        imgPlayer: "../shared/images/jacares/experiente.jfif"
    },
    {
        img: "./shared/images/scenarios/lava.jpg",
        nome: "mapa 05",
        nomePlayer: "Arthur",
        imgPlayer: "../shared/images/jacares/experiente.jfif"
    },
    {
        img: "./shared/images/scenarios/lava.jpg",
        nome: "mapa 06",
        nomePlayer: "Flip",
        imgPlayer: "../shared/images/jacares/experiente.jfif"
    },
    {
        img: "./shared/images/scenarios/lava.jpg",
        nome: "mapa 07",
        nomePlayer: "Juju",
        imgPlayer: "../shared/images/jacares/experiente.jfif"
    },
    {
        img: "./shared/images/scenarios/lava.jpg",
        nome: "mapa 08",
        nomePlayer: "Iza",
        imgPlayer: "../shared/images/jacares/experiente.jfif"
    },
    {
        img: "./shared/images/scenarios/lava.jpg",
        nome: "mapa 09",
        nomePlayer: "Gab",
        imgPlayer: "../shared/images/jacares/experiente.jfif"
    }
];

 var carrouselItem = document.createElement("div");
 carrouselItem.classList.add("carousel-item", "active");
 containerCarrousel.appendChild(carrouselItem);   
    
let divMaps = document.createElement("div");
divMaps.className = "content-rei-do-morro container";
carrouselItem.appendChild(divMaps);
        
for(const [index, mapa] of mapas.entries()){
    if((index % (window.innerWidth > 769 ? 6 : 4) == 0) && index != 0){
        carrouselItem = document.createElement("div");
        carrouselItem.classList.add("carousel-item");
        containerCarrousel.appendChild(carrouselItem);

        divMaps = document.createElement("div");
        divMaps.className = "content-rei-do-morro container";
        carrouselItem.appendChild(divMaps);
    }

    let div = document.createElement("div");
    div.className = "img-label";
    divMaps.appendChild(div);

    let img = document.createElement("img");
    img.src = mapa.img;
    img.className = "img-fluid";
    div.appendChild(img);
    img.addEventListener("click",()=>showReiDoMorro(mapa));

    let label = document.createElement("h4");
    label.textContent = mapa.nome;
    div.appendChild(label);
    
}


