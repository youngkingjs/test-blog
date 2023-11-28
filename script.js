document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display cards from the JSON file
    fetch("cards.json")
        .then((response) => response.json())
        .then((data) => {
            const cardsContainer = document.getElementById("cards-container");

            data.forEach((card) => {
                const cardElement = document.createElement("div");
                cardElement.classList.add("card");
                cardElement.innerHTML = `
                    <h2>${card.title}</h2>
                    <p>${card.description}</p>
                `;
                cardsContainer.appendChild(cardElement);
            });
        });
});
