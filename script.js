function emptyCart(){
    alert("Your Cart is empty!")
}

var cookieContent = document.querySelector(".cookie-content");
var cookieButton = document.querySelector(".cookie-button");

cookieButton.addEventListener("click", () => {
    cookieContent.classList.remove("active");
});

setTimeout( () => {
    cookieContent.classList.add("active");
}, 1000);