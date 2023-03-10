const mainContainer = document.querySelector('.main-container');
const thankYouContainer = document.querySelector('.thank-you');
const submitButton = document.querySelector('#submit');
const rateAgain = document.querySelector('#rate-again');
const rating = document.querySelector('#rating');
const rates = document.querySelectorAll('.btn');

submitButton.addEventListener('click', () => {
   thankYouContainer.classList.remove('hidden');
   mainContainer.style.display = 'none'
})

rateAgain.addEventListener('click', () => {
    thankYouContainer.classList.add('hidden');
    mainContainer.style.display = 'block'
 })

 rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    })
 })