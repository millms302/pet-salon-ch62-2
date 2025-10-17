let pets = [
    {name: "Diesel", age: 8, gender: "Male", service: "Nail Trim", breed: "Lab/Great Dane"},
    {name: "Anna", age: 12, gender: "Female", service: "Bath", breed: "Lab"},
    {name: "Tasha", age: 14, gender: "Female", service: "Both", breed: "Lab/Chou"}
]

let petList = [pets]

const userRegistrationForm = document.querySelector("form");
const cardContainer = document.getElementById("cardContainer")

function registerUser(event) {
    event.preventDefault();
};

const name = userRegistrationForm.elements["name"].value;
const age = userRegistrationForm.elements["age"].value;
const breed = userRegistrationForm.elements["breed"].value;
const gender = userRegistrationForm.elements["gender"].value;
const service = userRegistrationForm.elements["service"].value;

