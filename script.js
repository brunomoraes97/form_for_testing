function validateForm() {

    document.getElementById('submit-button').addEventListener('click', function() {
    console.log("Submit button clicked");
    dataLayer.push({'event': 'submitButtonClick'});
});

    
    let isValid = true;

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Validate Name
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
        document.getElementById("messageError").innerText = "Message is required";
        isValid = false;
    }

    return isValid;
}
