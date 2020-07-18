// Back to Top Button

let scrollPos = 0;
let backToTopButton = document.querySelector('.back-to-top');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY > scrollPos) {
    // Scrolling UP
    backToTopButton.classList.add('is-visible');
    backToTopButton.classList.remove('is-hidden');
  } else {
    // Scrolling DOWN
    backToTopButton.classList.add('is-hidden');
    backToTopButton.classList.remove('is-visible');
  }
  scrollPos = windowY;
}

function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.addEventListener('scroll', debounce(checkPosition));
