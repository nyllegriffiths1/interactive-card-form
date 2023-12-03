function validateCreditCard() {
    let creditCardNumber = document.getElementById('cnumber').value;
    let errorMessage = document.getElementById('error-message');
    let cardNumberDisplay = document.getElementById('cardNumberDisplay');
    let expirationDateDisplay = document.getElementById('expirationYearDisplay');
    let securityDisplay = document.getElementById('securityDisplay');
    // Remove spaces and dashes from the credit card number
    let cleanedCreditCardNumber = creditCardNumber.replace(/[\s-]/g, '');

    // check if the credit card number has 16 digits
    let regex = /^\d{16}$/;

    if (regex.test(cleanedCreditCardNumber)) {
        errorMessage.textContent = '';

        cardNumberDisplay.textContent = 'Card Number: ' + cleanedCreditCardNumber;
        
        return false;
    } else {

        errorMessage.innerHTML = 'Wrong format, numbers only';
        return false;
        
    }


}