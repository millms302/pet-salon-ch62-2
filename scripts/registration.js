pets = [
    { name: "Diesel", Breed: "dog", gender: "male", age: 8, service: "Both" },
    { name: "Calypso", breed: "cat", gender: "female", age: 13, service: "bath" },
    { name: "Nala", breed: "cat", gender: "female", age: 15, service: "trim" },
    { name: "Guardian", breed: "cat", gender: "female", age: 7, service: "both", }
]
console.log("Pets Array Loaded", pets)

function displayPetCount() {
    total = pets.length;
    document.getElementById("petCount").textContent = "Total Registered Pets:" + total;
}


function displayPetNames() {
    let listItems = "";
    for (let i=0; i < pets.length; i++) {
    listItems += `<li class="list-group-item"><strong>${pets[i].name}</strong> - ${pets[i].service}`};

    document.getElementById("petList").innerHTML = listItems;
}

displayPetCount() // How to run a script. 

displayPetNames()