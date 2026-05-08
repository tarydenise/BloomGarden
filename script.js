console.log("BloomGarden is connected!");

// --- Seed Bundle Data ---
const seedBundles = [
    {
        color: "yellow",
        pattern: "solid",
        rarity: "common",
    },
    {
        color: "pink",
        pattern: "striped",
        rarity: "common",
    },
    {
        color: "blue",
        pattern: "dotted",
        rarity: "common",
    },
];

// --- Render Seed Bundles ---
function renderSeedBundles() {
    const container = document.getElementById("seed-container");
    container.innerHTML = ""; // Clear existing seeds

    seedBundles.map((seed) => {
        const card = document.createElement("div");
        card.classList.add("flower-card");

        card.innerHTML = `
            <h3>${seed.color} Seed</h3>
            <p>Pattern: ${seed.pattern}</p>
            <p>Rarity: ${seed.rarity}</p>
        `;

        container.appendChild(card);
    });
}

renderSeedBundles();