const infoContainer = document.querySelector(".info-container");
const showTitle = document.querySelector("h1");
const mousemove = document.querySelector(".mousemove");



window.addEventListener("mousemove", (e) => {
     mousemove.style.left = e.pageX + "px";
     mousemove.style.top = e.pageY + "px";
     console.log(e);
});

