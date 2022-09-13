window.onload = () => {
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".hamburger").classList.toggle("active");
        document.querySelector(".nav-links").classList.toggle("active");
    })
}