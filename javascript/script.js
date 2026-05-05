const form = document.getElementById("worldcupform");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("nation").value;
    const name = document.getElementById("worldcups").value;

    message.textContent = "$(nation), great! $(worldcups), wow! That many?";
});