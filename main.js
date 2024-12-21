var title = document.querySelector("h1");

function changeColor(){
    title.style.color= "purple";
};

title.addEventListener("click", changeColor());