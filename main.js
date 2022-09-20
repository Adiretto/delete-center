// hamburger menu
/*
const openHamburger = document.getElementById('open-hifu');

const closeHambuger = document.getElementById('popup-close-hifu');
const hamburger = document.getElementById('popup-hifu');

openPopUp_hifu.addEventListener('click', function(e){
    e.preventDefault();
    popUp_hifu.classList.add('active');
})

closePopup_hifu.addEventListener('click', () => {
    popUp_hifu.classList.remove('active')
})
*/

// -----------------------------------------------

const openPopUp_hifu = document.getElementById('open-hifu');

const closePopup_hifu = document.getElementById('popup-close-hifu');
const popUp_hifu = document.getElementById('popup-hifu');

openPopUp_hifu.addEventListener('click', function(e){
    e.preventDefault();
    popUp_hifu.classList.add('active');
})

closePopup_hifu.addEventListener('click', () => {
    popUp_hifu.classList.remove('active')
})

// -----------------------------------------

const openPopUp_ultraformer = document.getElementById('open-ultraformer');

const closePopup_ultraformer = document.getElementById('popup-close-ultraformer');
const popUp_ultraformer = document.getElementById('popup-ultraformer');

openPopUp_ultraformer.addEventListener('click', function(e){
    e.preventDefault();
    popUp_ultraformer.classList.add('active');
})

closePopup_ultraformer.addEventListener('click', () => {
    popUp_ultraformer.classList.remove('active')
})

// -----------------------------------------
const openPopUp_cosmetics = document.getElementById('open-cosmetics');

const closePopup_cosmetics = document.getElementById('popup-close-cosmetics');
const popUp_cosmetics = document.getElementById('popup-cosmetics');

openPopUp_cosmetics.addEventListener('click', function(e){
    e.preventDefault();
    popUp_cosmetics.classList.add('active');
})

closePopup_cosmetics.addEventListener('click', () => {
    popUp_cosmetics.classList.remove('active')
})

// -----------------------------------------


const openPopUp_intim = document.getElementById('open-intim');

const closePopup_intim = document.getElementById('popup-close-intim');
const popUp_intim = document.getElementById('popup-intim');

openPopUp_intim.addEventListener('click', function(e){
    e.preventDefault();
    popUp_intim.classList.add('active');
})

closePopup_intim.addEventListener('click', () => {
    popUp_intim.classList.remove('active')
})


// --------------------- slider before and after section

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// --------- timer -----------------
document.addEventListener('DOMContentLoaded', function() {
    // конечная дата, например 1 июля 2021
    const deadline = new Date(2022, 09, 01);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });