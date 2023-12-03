    let creditCardNumber = document.getElementById('cnumber').value;
    let errorMessage = document.getElementById('error-message');
    let cardNumberDisplay = document.getElementById('cardNumberDisplay');
    let expirationDateMonth = document.getElementById('sm-input1');
    let expirationDateYear = document.getElementById('sm-input2');
    let security = document.getElementById('cvc-input');
    let creditCardName = document.getElementById('cname');
    let cardHolderNameDisplay = document.getElementById('cardHolderName');
    let securityDisplay = document.getElementById('securityDisplay');
    let expirationDateDisplay = document.getElementById('expirationYearDisplay');


    // Changing the values live
    creditCardName.addEventListener('input', function() {
        cardHolderNameDisplay.textContent = creditCardName.value;
    });

    expirationDateMonth.addEventListener('input', function() {
        expirationDateDisplay.textContent = expirationDateMonth.value;
    })




function validateCreditCard() {
    // Remove spaces and dashes from the credit card number
    let cleanedCreditCardNumber = creditCardNumber.replace(/[\s-]/g, '');

    // check if the credit card number has 16 digits
    let regex = /^\d{16}$/;

    if (regex.test(cleanedCreditCardNumber)) {
        errorMessage.textContent = '';
        return true;
    } else {

        errorMessage.innerHTML = 'Wrong format, numbers only';
        return false;
        
    }

    
}



