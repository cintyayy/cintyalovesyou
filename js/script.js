const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const btnGroup = document.querySelector('.btn-group');

function moveNoButton() {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', moveNoButton);

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I love you too! 😘';
    gif.src = 'https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif';

    // Hide the 'Yes' and 'No' buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    // Remove the event listener from the 'No' button since it's no longer visible
    noBtn.removeEventListener('mouseover', moveNoButton);

    // Create the new 'I have something for you' button if it doesn't exist
    if (!document.querySelector('.surprise-btn')) {
        const surpriseBtn = document.createElement('button');
        surpriseBtn.textContent = 'I have something for you';
        surpriseBtn.classList.add('surprise-btn', 'yes-btn'); // Apply 'Yes' button styles and any additional 'surprise-btn' styles
        btnGroup.appendChild(surpriseBtn);

        // Add an event listener to the new button that navigates to 'flower.html'
        surpriseBtn.addEventListener('click', () => {
            window.location.href = 'flower.html'; // Change the window's location to 'flower.html'
        });
    }
});

