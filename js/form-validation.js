const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const inputs = document.querySelectorAll('input');

const dateValidation = [
    {
        name: 'month',
        element: document.getElementById('month'),
        minVal: 1,
        maxVal: 12,
    },
    {
        name: 'day',
        element: document.getElementById('day'),
        minVal: 1,
        maxVal: 31,
    },
    {
        name: 'year',
        element: document.getElementById('year'),
        minVal: 2020,
        maxVal: 2025,
    }
];

const timeValidation = [
       {
        name: 'hour',
        element: document.getElementById('hour'),
        minVal: 1,
        maxVal: 12,
    },
    {
        name: 'minute',
        element: document.getElementById('minute'),
        minVal: 1,
        maxVal: 59,
    },
];

// FUNCTION TO VALIDATE NAME
function nameCheck() {
    if (!name.value) {
        name.classList.add('errorColor');
        printError(name,'This field is required', true);
        addFocusoutCheck(name,nameCheck);
    } else {
        name.classList.remove('errorColor');
        printError(name);
    }
};

// FUNCTION TO VALIDATE EMAIL
function emailCheck() {
    const emailTemplate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value) {
        email.classList.add('errorColor');
        printError(email,'This field is required', true);
        addFocusoutCheck(email,emailCheck);
    } else if (!emailTemplate.test(String(email.value).toLowerCase())) {
        email.classList.add('errorColor');
        printError(email,'Please use a valid email address', true);
        addFocusoutCheck(email,emailCheck);
    } else {
        email.classList.remove('errorColor');
        printError(email);
    }
};

// FUNCTION TO VALIDATE DATE
function dateCheck () {
    dateValidation.forEach(el => {
        if (el.element.value === '' || el.element.value < el.minVal || el.element.value > el.maxVal) {
            el.element.classList.add('errorColor');
            printError(el.element.parentElement, 'This field is incomplete', true);
            addFocusoutCheck(el.element,dateCheck);
        } else {
            if (dateValidation[0].element.value !== '' && dateValidation[1].element.value !== '' && dateValidation[2].element.value !== '') {
                el.element.classList.remove('errorColor');
                printError(el.element.parentElement);
            }
            el.element.classList.remove('errorColor');
        }
    });
}

// FUNCTION TO VALIDATE TIME
function timeCheck () {
    timeValidation.forEach(el => {
        if (el.element.value === '' || el.element.value < el.minVal || el.element.value > el.maxVal) {
            el.element.classList.add('errorColor');
            printError(el.element.parentElement, 'This field is incomplete', true);
            addFocusoutCheck(el.element,timeCheck);
        } else {
            if (timeValidation[0].element.value !== '' && timeValidation[1].element.value !== '') {
                el.element.classList.remove('errorColor');
                printError(el.element.parentElement);
            }
            el.element.classList.remove('errorColor');
        }
    });
}

// ERROR FUNCTION
function printError (inputElement, err, whatToDo) {
    // GET THE PARENT ELEMENT OF THE INPUT
    const parent = inputElement.parentElement;
    // GET THE ERROR MESSAGE
    const small = parent.querySelector('small');

    if (whatToDo) {
        // ADD ERROR CLASS TO THE PARENT
        parent.classList.add('error');
        // UPDATE THE ERROR MESSAGE WITH THE ERROR
        small.innerText = err;
    } else {
        // REMOVE THE ERROR CLASS FROM THE PARENT
        parent.classList.remove('error');
        // UPDATE THE ERROR MESSAGE (NO ERROR)
        small.innerText = '';
    }
};

// RUN ERROR CHECK ON THE INPUT AFTER USER INPUT DETAILS
function addFocusoutCheck (inp,fn) {
    inp.addEventListener('focusout', fn);
}

// EVENTS LISTENERS
form.addEventListener('submit', function(e){
    nameCheck();
    emailCheck();
    dateCheck();
    timeCheck();
    e.preventDefault();
});