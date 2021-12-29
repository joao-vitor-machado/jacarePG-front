
    if(window.innerWidth < 768){

        console.log(window.innerWidth)
    
        let imgsDiv = document.querySelector(".images-div");
        imgsDiv.id = "carouselExpMag";
        imgsDiv.classList.add("carousel", "slide", "d-block", "col-12");
    
        let innerCarousel = document.createElement("div");
        innerCarousel.classList.add("carousel-inner");
        imgsDiv.appendChild(innerCarousel);
    
        let activeItem = document.createElement("div");
        activeItem.classList.add("carousel-item", "carousel-mag");
        innerCarousel.appendChild(activeItem);
        activeItem.appendChild(document.querySelector("#magnata"));
    
        let notActiveItem = document.createElement("div");
        notActiveItem.classList.add("carousel-item", "carousel-mag");
        innerCarousel.appendChild(notActiveItem);
        notActiveItem.appendChild(document.querySelector("#experiente"))
    
         let imgs = document.querySelectorAll(".carousel-mag");
         imgs[0].classList.add("active");
    
        let btnPrev = document.createElement("button");
        btnPrev.classList.add("carousel-control-prev");
        const dataPrev = btnPrev.dataset;
        dataPrev.bsTarget = "#carouselExpMag";
        dataPrev.bsSlide = "prev";
        imgsDiv.appendChild(btnPrev);
    
        let iconPrev = document.createElement("span");
        iconPrev.classList.add("carousel-control-prev-icon");
        iconPrev.dataset.ariaHidden = "true";
        btnPrev.appendChild(iconPrev);
    
        let btnNext = document.createElement("button");
        btnNext.classList.add("carousel-control-next");
        const datanext = btnNext.dataset;
        datanext.bsTarget = "#carouselExpMag";
        datanext.bsSlide = "next";
        imgsDiv.appendChild(btnNext);
    
        let iconNext = document.createElement("span");
        iconNext.classList.add("carousel-control-next-icon");
        iconNext.dataset.ariaHidden = "true";
        btnNext.appendChild(iconNext);
    }
