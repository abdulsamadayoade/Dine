// VARIABLES
const selectedDaytime = document.getElementById('selectedDaytime');
const arrow = document.getElementById('arrow');
const tickAM = document.getElementById('tickAM');
const optionAM = document.querySelector('.daytime__options-AM');
const optionPM = document.querySelector('.daytime__options-PM'); 
const tickPM = document.getElementById('tickPM');
const optionsBox = document.querySelector('.daytime__options');


arrow.addEventListener('click', ()=> {
    optionsBox.classList.toggle('hidden');
    arrow.classList.toggle('mirror');
});

optionPM.addEventListener('click', ()=>{
    tickAM.classList.add('hidden');
    tickPM.classList.remove('hidden');
    selectedDaytime.innerText = 'PM';
    optionsBox.classList.toggle('hidden');
    arrow.classList.toggle('mirror');
});

optionAM.addEventListener('click', ()=>{
    tickAM.classList.remove('hidden');
    tickPM.classList.add('hidden');
    selectedDaytime.innerText = 'AM';
    optionsBox.classList.toggle('hidden');
    arrow.classList.toggle('mirror');
});