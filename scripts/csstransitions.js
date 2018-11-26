function changeHeader() {
document.getElementById("header").style.color = "orange";
document.getElementById("header").style.backgroundColor = "navy";
document.getElementById("p").style.backgroundColor = "navy";
}

function changeTransform() {
    document.getElementById("profile-image").style.WebkitTransition = "all 4s";
    document.getElementById("profile-image").style.transition = "all 4s";  
}

function addTransition() {
    document.getElementById("header").style.color = "azure";
    document.getElementById("header").style.backgroundColor = "rgb(85, 153, 113)";
    document.getElementById("header").style.transition = "all 4s ease";
}