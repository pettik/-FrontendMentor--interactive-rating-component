const mainBox = document.querySelector('.main_box');
const thxBox = document.querySelector('.thx_box');
const sendBtn = document.getElementById('send-btn');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.rate-btn');

sendBtn.addEventListener('click', () => {
  thxBox.classList.remove('hide');
  mainBox.classList.add('hide');
});

rates.forEach((rate) => {
  console.log(rate.innerHTML);
  rate.addEventListener('click', () => (rating.innerHTML = rate.innerHTML));
});
