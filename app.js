    let creditCardNumber = document.getElementById('cnumber').value;
    let errorMessage = document.getElementById('error-message');
    let cardNumberDisplay = document.getElementById('cardNumberDisplay');
    let expirationDateMonth = document.getElementById('sm-input1');
    let expirationDateYear = document.getElementById('sm-input2');
    let security = document.getElementById('cvc-input');
    let creditCardName = document.getElementById('cname');
    let cardHolderNameDisplay = document.getElementById('cardHolderName');
    let securityDisplay = document.getElementById('securityDisplay');
    let expirationDateDisplay = document.getElementById('month');
    let expirationDateDisplay2 = document.getElementById('year');
    let creditCardNumberNotValue = document.getElementById('cnumber');


    // Changing the values live
    creditCardName.addEventListener('input', function() {
        cardHolderNameDisplay.textContent = creditCardName.value;
    });

    expirationDateMonth.addEventListener('input', function() {
        expirationDateDisplay.textContent = expirationDateMonth.value + "/";
        
    })

    expirationDateYear.addEventListener('input', function() {
        expirationDateDisplay2.textContent = expirationDateYear.value;
    })

    creditCardNumberNotValue.addEventListener('input', function() {
        cardNumberDisplay.textContent = creditCardNumberNotValue.value;
    })


    security.addEventListener('input', function() {
        securityDisplay.textContent = security.value;
    })
    
    
    function validateCreditCard() {
        // Move this line inside the function to get the current value when called
        let creditCardNumber = document.getElementById('cnumber').value;
        
        // Remove spaces and dashes from the credit card number
        let cleanedCreditCardNumber = creditCardNumber.replace(/[\s-]/g, '');
    
        // check if the credit card number has 16 digits
        let regex = /^\d{16}$/;
    
        if (regex.test(cleanedCreditCardNumber)) {
            return replaceForm();
        } else {
            errorMessage.innerHTML = 'Wrong format, numbers only';
            return false;
        }
    }
    

function replaceForm() {
    const container = document.querySelector('.container');
    const formContent = document.getElementById('form-id');

    formContent.innerHTML = '';

    const divContainer = document.createElement('div');

    const imgElement = document.createElement('img');
    imgElement.src = '/interactive-card-form/images/icon-complete.svg';

    const h1Element = document.createElement('h1');
    h1Element.textContent = 'Thank you!';

    const pElement = document.createElement('p');
    pElement.textContent = 'Weve added your card details';

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Continue';

    container.appendChild(divContainer);
    divContainer.appendChild(imgElement);
    divContainer.appendChild(h1Element);
    divContainer.appendChild(pElement);
    divContainer.appendChild(buttonElement);

    if(divContainer) {
        divContainer.style.display = 'flex';
        divContainer.style.flexDirection = 'column';
        divContainer.style.alignItems = 'center';
        divContainer.style.justifyContent = 'center'
        divContainer.style.margin = '0.75rem';
        buttonElement.style.width = '60%';
        buttonElement.style.backgroundColor = 'hsl(278, 68%, 11%)';
        buttonElement.style.color = 'white';
        pElement.style.color = 'hsl(279, 6%, 55%)';
        buttonElement.style.padding = '0.625rem';
        buttonElement.style.borderRadius = '0.625rem';
        const frontCard = document.getElementById('front-card').style.top = '-42%';
        

        const childElements = divContainer.children;
        for(let i = 0; i < childElements.length; i++) {
            childElements[i].style.margin = '0.75rem';
        }

    } 

}




const myForm = document.getElementById('form-id');
myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if(validateCreditCard()) {
        replaceForm();
    }
});
