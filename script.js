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

// --- Flower Trait Pools ---
const colors = ["yellow", "pink", "blue", "purple", "white"];
const patterns = ["solid", "striped", "dotted", "gradient"];
const rarities = ["common", "uncommon", "rare"];

// --- Generate Random Seed with LoDash _.sample() ---

function generateRandomSeed() {
    return {
        color: _.sample(colors),
        pattern: _.sample(patterns),
        rarity: _.sample(rarities),
    };
}

function renderFlower(flower, container) {
    const card = document.createElement("div");
    card.classList.add("flower-card");

    card.innerHTML = `
        <h3>${flower.color} Flower</h3>
        <p>Pattern: ${flower.pattern}</p>
        <p>Rarity: ${flower.rarity}</p>
    `;

    container.appendChild(card);
}

document.getElementById("plant-seed-btn").addEventListener("click", () => {
    const newFlower = generateRandomSeed();
    const gardenContainer = document.getElementById("garden-container");
    renderFlower(newFlower, gardenContainer);
});

renderSeedBundles();