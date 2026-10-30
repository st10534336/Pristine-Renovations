const form = document.getElementById('contact-page-form');
const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');

const surnameInput = document.getElementById('surname');
const surnameError = document.getElementById('surnameError');

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

const messageInput = document.getElementById('message');
const messageError = document.getElementById('messageError');

const successModal = document.getElementById('success-modal');
const warningModal = document.getElementById('warning-modal');

const warningModalButton = document.getElementById('warning-modal-button');
const successModalButton = document.getElementById('success-modal-button');

var allChecksPassed = true;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    allChecksPassed = true;

    nameError.style.visibility = "hidden";
    surnameError.style.visibility  = "hidden";
    emailError.style.visibility = "hidden";
    messageError.style.visibility = "hidden";

    if (nameInput.value == "") {
        nameError.style.visibility = "visible";
        allChecksPassed = false;
    }
    if (surnameInput.value == "") {
        surnameError.style.visibility = "visible";
        allChecksPassed = false;
    }
    
    if (messageInput.value == "") {
        messageError.style.visibility = "visible";
        allChecksPassed = false;
    }

    if (!checkEmailValidity(emailInput.value)) {
        emailError.style.visibility = "visible";
        allChecksPassed = false;
    }

    if (allChecksPassed) {
        console.log("all checks successfully passed, enquiry sent");
        
        $(document).ready(function() {
            $('#feedback').css('color', 'blue').text('Sending data to ReqRes...');

        // Automatically pulls "https://reqres.in" and "POST" from the HTML attributes above
        var targetUrl = $(this).attr('action');
        var submitMethod = $(this).attr('method');
        var serializedData = $(this).serialize();

        $.ajax({
            url: targetUrl,
            type: submitMethod,
            data: serializedData,
            success: function(response) {
                console.log("Response name: " + response.name);
                console.log("Response ID: " + response.id);
                console.log("Response Timestamp" + response.createdAt)
                
                // Clear the form fields after successful submission
                $('#contact-page-form')[0].reset();
            },
            error: function() {
                console.log("failed to reach server");
            }
        })

        });
        successModal.style.visibility = 'visible';
        
    }else {
        warningModal.style.visibility = 'visible';
        //alert("Submission unsuccessful, please ensure all fields are filled and correctly formatted");
    }
    
    
});

warningModalButton.addEventListener('click', e => {
    warningModal.style.visibility = 'hidden';
})
successModalButton.addEventListener('click', e => {
    successModal.style.visibility = 'hidden';
})



function checkEmailValidity(email) {
    // Checks for: characters + @ + characters + . + characters
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);

}