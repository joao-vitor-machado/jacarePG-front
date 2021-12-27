function showReiDoMorro(mapaObj){
    var blockedSecreen = document.createElement("div");
    blockedSecreen.className = "blocked-screen";
    body = document.querySelector("body");
    body.appendChild(blockedSecreen);

    let div = document.createElement("div");
    div.className = "items-div";
    blockedSecreen.appendChild(div);

    for(itemString of mapaObj.items){
        let item = document.createElement("h3");
        item.textContent = itemString;
        div.appendChild(item);
    }

    let buttonClose = document.createElement("button");
    buttonClose.className = "close-button";
    buttonClose.textContent = "Fechar";
    buttonClose.addEventListener("click", () => body.removeChild(blockedSecreen));
    blockedSecreen.appendChild(buttonClose);

}

 var mapas = [
    {
        nome: "mapa 01",
        img: "./shared/images/scenarios/sea.jpg",
        items: ["item 01", "item 02", "item 03", "item 04", "item 01", "item 02", "item 03", "item 04","item 01", "item 02", "item 03", "item 04"]
    },
    {
        nome: "mapa 02",
        img: "./shared/images/scenarios/lava.jpg",
        items: ["item 01", "item 02", "item 03", "item 04"]
    },
    {
        nome: "mapa 03",
        img: "./shared/images/scenarios/lava.jpg",
        items: ["item 01", "item 02", "item 03", "item 04"]
    },
    {
        nome: "mapa 04",
        img: "./shared/images/scenarios/lava.jpg",
        items: ["item 01", "item 02", "item 03", "item 04"]
    },
    {
        nome: "mapa 05",
        img: "./shared/images/scenarios/sea.jpg",
        items: ["item 01", "item 02", "item 03", "item 04"]
    },
    {
        nome: "mapa 06",
        img: "./shared/images/scenarios/sea.jpg",
        items: ["item 01", "item 02", "item 03", "item 04"]
    },
    {
        nome: "mapa 07",
        img: "./shared/images/scenarios/sea.jpg",
        items: ["item 01", "item 02", "item 03", "item 04"]
    },
    {
        nome: "mapa 08",
        img: "./shared/images/scenarios/mountain.jpg",
        items: ["item 01", "item 02", "item 03", "item 04"]
    },
    {
        nome: "mapa 09",
        img: "./shared/images/scenarios/mountain.jpg",
        items: ["item 01", "item 02", "item 03", "item 04"]  
    }
];

 var carrouselItem = document.createElement("div");
 carrouselItem.classList.add("carousel-item", "active");
 containerCarrouselMapItems.appendChild(carrouselItem);   
    
let divMapsMapItems = document.createElement("div");
divMapsMapItems.className = "content-map-items container";
carrouselItem.appendChild(divMapsMapItems);
        
for(const [index, mapa] of mapas.entries()){
    if((index % 6 == 0) && index != 0){
        carrouselItem = document.createElement("div");
        carrouselItem.classList.add("carousel-item");
        containerCarrouselMapItems.appendChild(carrouselItem);

        divMapsMapItems = document.createElement("div");
        divMapsMapItems.className = "content-map-items container";
        carrouselItem.appendChild(divMapsMapItems);
    }

    let div = document.createElement("div");
    div.className = "img-label";
    divMapsMapItems.appendChild(div);

    let img = document.createElement("img");
    img.src = mapa.img;
    img.className = "img-fluid";
    div.appendChild(img);
    img.addEventListener("click",()=>showReiDoMorro(mapa));

    let label = document.createElement("h4");
    label.textContent = mapa.nome;
    div.appendChild(label);
    
}


