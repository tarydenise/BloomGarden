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

    // Handle selection
    card.addEventListener("click", () => {
        // If already selected, unselect it
        if (card.classList.contains("selected")) {
            card.classList.remove("selected");
            selectedFlowers = selectedFlowers.filter(f => f !== flower);
            return;
        }

        // If selecting a new one but already have 2 selected, block it
        if (selectedFlowers.length >= 2) {
            alert("You can only select 2 flowers to breed.");
            return;
        }

        // Select the flower
        card.classList.add("selected");
        selectedFlowers.push(flower);
    });

    container.appendChild(card);
}

document.getElementById("plant-seed-btn").addEventListener("click", () => {
    const newFlower = generateRandomSeed();
    const gardenContainer = document.getElementById("garden-container");
    renderFlower(newFlower, gardenContainer);
});

let selectedFlowers = []; // To keep track of selected flowers for breeding

// --- Breeding Logic ---

function breedFlowers(f1, f2) {
    // Combine traits
    const hybrid = {
        color: _.sample([f1.color, f2.color]),
        pattern: _.sample([f1.pattern, f2.pattern]),
        rarity: _.sample([f1.rarity, f2.rarity]),
    };

    return hybrid;
}

function determineRarity(r1, r2) {
    if (r1 === "rare" && r2 === "rare") return "ultra-rare";
    if (r1 === "uncommon" && r2 === "uncommon") return "rare";
    if (r1 === "rare" || r2 === "rare") return "rare";
    if (r1 === "uncommon" || r2 === "uncommon") return "uncommon";
    return "common"; // two commons make an uncommon
}

// --- Add Breeding Button Logic ---
document.getElementById("breed-btn").addEventListener("click", () => {
    if (selectedFlowers.length !== 2) {
        alert("Please select exactly 2 flowers to breed.");
        return;
    }

    const [f1, f2] = selectedFlowers;

    const hybrid = breedFlowers(f1, f2);

    const hybridContainer = document.getElementById("hybrid-container");
    renderFlower(hybrid, hybridContainer);

    // Clear selection
    selectedFlowers = [];
    document.querySelectorAll(".selected").forEach(card => {
        card.classList.remove("selected");
    });
});