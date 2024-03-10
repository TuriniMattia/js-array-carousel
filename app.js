const sliderImgs = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",
];

const itemContainer = document.querySelector(".items-container")

const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
let selectedIndex = 0

function refresh() {
    itemContainer.innerHTML = ""
    for (let i = 0; i < sliderImgs.length; i++) {
        const image = sliderImgs[i];

        if (i === selectedIndex) {
            itemContainer.innerHTML += `
        <div class="item active"><img src="${image}"></div>`
        } else {
            itemContainer.innerHTML += `
            <div class="item"><img src="${image}"></div>`
        }
    }
}

refresh()

nextBtn.addEventListener("click", function () {
    selectedIndex++
    if (selectedIndex >= sliderImgs.length) {
        selectedIndex = 0
    }
    refresh()
})

prevBtn.addEventListener("click", function () {
    selectedIndex--
    if (selectedIndex < 0) {
        selectedIndex = sliderImgs.length - 1
    }
    refresh()
})

