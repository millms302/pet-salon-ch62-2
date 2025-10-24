// Select the form by ID using jQuery?
//everything in jQuery is a selector and an action
// $is undefined means I need to link jQuery
$("#servicesForm").on("submit", function (event) {
    event.preventDefault();

    //Test the Save Button
    console.log("Save Button Clicked");

    // 1. Get the Values from the form using jQuery: $("functionName").val().
    const serviceName = $("#serviceName").val().trim();
    const serviceDescription = $("#serviceDescription").val().trim();
    const servicePrice = $("#servicePrice").val().trim();

    //Test: Print in the console one single sentence
    // with the 3 value retrieved from the form
    console.log(`The service is: ${servicePrice}, ${serviceName}, ${serviceDescription}`);

    // 2. Validate the values: if there is nothing in the service and description field, we will show them the error. 1 means negative
    if(!serviceName || !serviceDescription || servicePrice <= 0){
       

        //ASSIGNMENT 1: remove the above alert and usejQuery to add a red border to missing fields.

        return;
    } else {
        // 3. Save the Service (Assignment 3)
        
        alert("Service has been saved.");
    }

    // 4. Clear the form
    $("servicesForm")[0].reset();


});

$("#changeModeButton").click(function () {
    $("body").toggleClass("dark-mode");

    const isDark = $("body").hasClass("dark-mode");

    if (isDark){
        $("").text("Dark Mode")
    } else {
        $("").text("Light Mode");
    }
})