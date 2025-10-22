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
        alert("All Values Are Required and the Price Must Be Greater Than Zero");

        return;
    } else
        // 3. Save the Service (Assignment 3) 





});