// CAROUSEL
function handleCarousel() {
    const NEW_BOOK_ITEMS = document.querySelectorAll('#newBookCarousel .carousel-item');
    const TOP_BOOK_ITEMS = document.querySelectorAll('#topBookCarousel .carousel-item');

    NEW_BOOK_ITEMS.forEach((el) => {
        const minPerSlide = 6
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = NEW_BOOK_ITEMS[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })

    TOP_BOOK_ITEMS.forEach((el) => {
        const minPerSlide = 6
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = TOP_BOOK_ITEMS[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}

handleCarousel();
