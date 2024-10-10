document.addEventListener("DOMContentLoaded", () => {
    const days = document.querySelectorAll(".day");
    const infoBox = document.getElementById("infoBox");

    days.forEach(day => {
        day.addEventListener("click", () => {
            const info = day.getAttribute("data-info");

            // Verifica se a informação existe antes de exibir
            if (info) {
                infoBox.innerHTML = `<p>${info}</p>`;
            } else {
                infoBox.innerHTML = "<p>Nenhuma informação disponível.</p>";
            }
        });
    });
});
