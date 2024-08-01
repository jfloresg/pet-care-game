let hunger = 100;
let happiness = 100;
let selectedPet = '';

function selectPet(pet) {
    selectedPet = pet;
    document.getElementById('pet-selection').style.display = 'none';
    document.getElementById('pet-care').style.display = 'block';
    setPetImage();
}

function setPetImage() {
    const petImage = document.getElementById('petImage');
    switch (selectedPet) {
        case 'dog':
            petImage.src = 'https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjIzODQwMjl8&ixlib=rb-4.0.3&q=85';
            break;
        case 'cat':
            petImage.src = 'https://images.unsplash.com/photo-1705147296072-6c5da9ca5c11?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjIzODQ1MjR8&ixlib=rb-4.0.3&q=85';
            break;
        case 'bird':
            petImage.src = 'https://images.unsplash.com/photo-1516478210106-0ff3684b2421?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjIzODQ3NjR8&ixlib=rb-4.0.3&q=85';
            break;
        default:
            petImage.src = '';
    }
}

function feedPet() {
    if (hunger < 100) {
        hunger += 10;
        if (hunger > 100) hunger = 100;
        updateStatus();
    }
}

function playWithPet() {
    if (happiness < 100) {
        happiness += 10;
        if (happiness > 100) happiness = 100;
        updateStatus();
    }
}

function updateStatus() {
    document.getElementById('hungerStatus').innerText = hunger;
    document.getElementById('happinessStatus').innerText = happiness;
}

function decreaseNeeds() {
    hunger -= 1;
    happiness -= 1;
    if (hunger < 0) hunger = 0;
    if (happiness < 0) happiness = 0;
    updateStatus();
}

setInterval(decreaseNeeds, 1000);
