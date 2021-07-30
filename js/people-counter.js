// VARIABLES
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const peopleNumber = document.getElementById('peopleNumber');
const peopleWord = document.getElementById('peopleWord');
const formPeople = document.querySelector('.form__people');
let peopleCounter = 4;

// PEOPLE OR PERSON COUNTER
minus.addEventListener('click', () => {
    if (peopleCounter > 2) {
        peopleCounter--;
        peopleNumber.innerText = peopleCounter;
    } else if (peopleCounter === 2) {
        peopleCounter--;
        peopleNumber.innerText = peopleCounter;
        peopleWord.innerText = 'person';
        minus.classList.add('inactive');
    }
});

plus.addEventListener('click', () => {
    if (peopleCounter === 1) {
        peopleCounter++;
        peopleNumber.innerText = peopleCounter;
        peopleWord.innerText = 'people';
        minus.classList.remove('inactive');
    } else if (peopleCounter > 1) {
        peopleCounter++;
        peopleNumber.innerText = peopleCounter;
    }
});

// ACTIVE STYLE FOR THE FORM PEOPLE COUNTER
minus.addEventListener('click', ()=> {
    formPeople.classList.add('active');
});
minus.addEventListener('mouseout', ()=> {
    formPeople.classList.remove('active');
});
plus.addEventListener('click', ()=> {
    formPeople.classList.add('active');
});
plus.addEventListener('mouseout', ()=> {
    formPeople.classList.remove('active');
});