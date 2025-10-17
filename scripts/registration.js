const petRegistrationForm = document.getElementById("petRegistrationForm");

// Pet Function Constructor

function Pet(name, age, breed, gender, service){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}



function registerPet(event){
    event.preventDefault();

    // get the values of the form
    const name = petRegistrationForm.elements["name"].value.trim();
    const age = petRegistrationForm.elements["age"].value;
    const breed = petRegistrationForm.elements["breed"].value;
    const gender = petRegistrationForm.elements["gender"].value;
    const service = petRegistrationForm.elements["service"].value;

    // New Pet Instance
    const newPet = new Pet(name, age, breed, gender, service );

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
    cardTitle.textContent = newPet.name;


    cardBody.appendChild(cardTitle);
    card.appendChild(cardBody);
    petCardContainer.appendChild(card);
}

