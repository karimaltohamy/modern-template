// button menu home
let btnMenu = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");

btnMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-open")
});

let pag = document.querySelectorAll(".pag");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let img = document.querySelector(".image img");
let root = document.querySelector(":root");
let anim = document.querySelector(".anim");
let count = 0;

let iamges = [
    "images/img (1).jpg",
    "images/img (2).jpg",
    "images/img (3).jpg",
    "images/img (4).jpg",
    "images/img (5).jpg"
];

let colors = [
    "#feb57b",
    "#b5162e",
    "#ffa901",
    "#27223f",
    "#468cc2"
];

// check elements in local storage

if (localStorage.getItem("img") !== null) {
    img.src = localStorage.getItem("img");
}

if (localStorage.getItem("color") !== null) {
    root.style.setProperty("--main-color", localStorage.getItem("color"));
    pag.forEach((li) => {
        li.classList.remove("active");
    });
}

if (localStorage.getItem("count") !== null) {
    pag[localStorage.getItem("count")].classList.add("active");
    count = localStorage.getItem("count");
}
// click on next and prev

next.onclick =  nextButton;
prev.onclick = prevButton;


pag.forEach((li) => {
    li.addEventListener("click", function () {
        count = parseInt(li.getAttribute("data-num") - 1);
        checker()
    })
})




function nextButton() {
    if (next.classList.contains("disable")) {
        return false
    }else {
        count++
        localStorage.setItem("count", count);
        checker()
    }
    
}

function prevButton() {
    if (prev.classList.contains("disable")) {
        return false
    }else {
        count--
        localStorage.setItem("count", count);
        checker();
    }
}
   


function checker() {
    // remove class active all element
    pag.forEach((li) => {
        li.classList.remove("active");
    });

    pag[count].classList.add("active");

    img.src = iamges[count];

    root.style.setProperty("--main-color", colors[count]);

    localStorage.setItem("img", iamges[count]);
    localStorage.setItem("color", colors[count])

    

    if (count === iamges.length - 1) {
        next.classList.add("disable")
    }else {
        next.classList.remove("disable");
    }

    if (count === 0) {
        prev.classList.add("disable")
    }else {
        prev.classList.remove("disable");
    }
}