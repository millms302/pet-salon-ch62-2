const petRegistrationForm = document.getElementById("petRegistrationForm");

// Pet Array

pets = [
    { name: "Diesel", breed: "dog", gender: "male", age: 8, service: "both" },
    { name: "Calypso", breed: "cat", gender: "female", age: 12, service: "bath" },
    { name: "Nala", breed: "cat", gender: "female", age: 17, service: "trim" },
]
console.log("Pets Arrray Loaded", pets)

// Pet Function Constructor

function Pet(name, age, breed, gender, service) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}



function registerPet(event) {
    event.preventDefault();

    // get the values of the form
    const name = petRegistrationForm.elements["name"].value.trim();
    const age = petRegistrationForm.elements["age"].value;
    const breed = petRegistrationForm.elements["breed"].value;
    const gender = petRegistrationForm.elements["gender"].value;
    const service = petRegistrationForm.elements["service"].value;

    if (name == "") {
        petRegistrationForm.elements["name"].classList.add("border", "border-danger");
    };

    if (age == "") {
        petRegistrationForm.elements["age"].classList.add("border", "border-danger");
    };

    if (breed == "Select Animal") {
        petRegistrationForm.elements["breed"].classList.add("border", "border-danger");
    };

    if (gender == "Select Gender") {
        petRegistrationForm.elements["gender"].classList.add("border", "border-danger");
    };

    if (service == "Select Service") {
        petRegistrationForm.elements["service"].classList.add("border", "border-danger");
    };

    // New Pet Instance
    const newPet = new Pet(name, age, breed, gender, service);

    // Test
    console.log(newPet);

    // Display the information in the browser
    const petCardContainer = document.getElementById("petCardContainer");

    const card = document.createElement("div");
    card.className = "card shadow-sm";
    card.style.width = "18rem";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";


    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.textContent = "Registered Pets";

    cardBody.className = "card-body";
    cardBody.textContent = (newPet.name, newPet.age, newPet.service, newPet.breed, newPet.gender);


    cardBody.appendChild(cardTitle);
    card.appendChild(cardBody);
    petCardContainer.appendChild(card);
}

function displayPetCount() {
    total = pets.length;
    document.getElementById("displayPetCount").textContent = "Total Registered Pets" + total;
}

function displayPetNames() {
    let listItems = "";
    for (let i = 0; i < pets.length; i++) {
        listItems += `<li class="list-group-item">${Pet[i].name} - ${Pet[i].service} - ${Pet[i].age} - ${Pet[i].gender} - ${Pet[i].breed}`;
    }
}