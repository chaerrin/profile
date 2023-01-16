function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function goToScroll(name) {
    var location = document.querySelector("#" + name).offsetTop;
    window.scrollTo({top: location, behavior: 'smooth'});
}