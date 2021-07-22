// THE EVENTS SWITCH
const events = [
    {
        title: 'Family Gathering',
        description: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
        image: document.querySelector('#familyGatheringImg'),
    },
    {
        title: 'Special Events',
        description: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
        image: document.querySelector('#specialEventsImg'),
    },
    {
        title: 'Social Events',
        description: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
        image: document.querySelector('#socialEventsImg'),
    }
];

// DOM VARIABLES
const eventHeading = document.getElementById('event__heading');
const eventText = document.getElementById('event__text');
const eventItems = document.querySelectorAll('.events__item');
const eventImages = document.querySelectorAll('.event__image');

// CLICK TO SWITCH EVENTS
eventItems.forEach((item, i) => {
    item.addEventListener('click', function(){
        eventHeading.innerText = events[i].title;
        eventText.innerText = events[i].description;
        eventImages.forEach(item => {
            item.classList.remove('showImage');
        });
        events[i].image.classList.add('showImage');
        eventItems.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});