function slideInAnimation(element) {
    element.classList.remove('slide-out'); // Remove any previous slide-out animation class
    element.classList.add('slide-in'); // Add the slide-in animation class
  }
  
  function slideOutAnimation(element) {
    element.classList.remove('slide-in'); // Remove any previous slide-in animation class
    element.classList.add('slide-out'); // Add the slide-out animation class
  }
  
  const animateButton = document.getElementById('animateButton');
  const slideInElement = document.querySelector('.slide-in');
  
  animateButton.addEventListener('click', () => {
    if (slideInElement.classList.contains('slide-in')) {
      slideOutAnimation(slideInElement);
    } else {
      slideInAnimation(slideInElement);
    }
  });