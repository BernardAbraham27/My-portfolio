document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("themeButton");
    button.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
    });
});
