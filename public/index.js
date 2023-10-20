// 1. Debounced Scroll Event
const navbar = document.querySelector('.navbar');

function updateNavbar() {
  if (window.scrollY > 10) {
    navbar.classList.add('gradient-background');
  } else {
    navbar.classList.remove('gradient-background');
  }
}

function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

const debouncedUpdateNavbar = debounce(updateNavbar, 100);

// Call updateNavbar once when the document is ready to handle the initial state
document.addEventListener('DOMContentLoaded', () => {
  updateNavbar();

  document.addEventListener('scroll', () => {
    debouncedUpdateNavbar();
  });
});

// 2. Click Event for Button
const toggleButton = document.getElementById('toggleGradientButton');
toggleButton.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('gradient-background');
});

// 3. Consolidate Animation Using requestAnimationFrame
function animateElements() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const altElements = document.querySelectorAll('.fade-in-alt');
  const cards = document.querySelectorAll('.fade-in-card');
  const sideElements = document.querySelectorAll('.fade-in-side');
  const elementsToObserve = document.querySelectorAll('.content-hidden');

  function animateElement(element) {
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
  }

  function animateElementAlt(element) {
    element.classList.add('active');
  }

  function revealCards() {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('active');
      }, index * 500); 
    });
  }

  function revealSideElements() {
    sideElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('active');
      }, index * 500);
    });
  }

  fadeElements.forEach((element) => {
    requestAnimationFrame(() => animateElement(element));
  });

  altElements.forEach((element) => {
    requestAnimationFrame(() => animateElementAlt(element));
  });

  requestAnimationFrame(animateElements);

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('content-visible');
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });

  // Observe the section to trigger the card animation
  const section = document.querySelector('.third-container');
  observer.observe(section);

  // Observe elements to trigger the side element animation
  sideElements.forEach(element => {
    observer.observe(element);
  });

  // Trigger the card animation when the document is ready
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealCards();
        sectionObserver.unobserve(entry.target);
      }
    });
  });

  sectionObserver.observe(section);
}

// Start the animations when the document is ready
document.addEventListener('DOMContentLoaded', animateElements);



document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.fade-in-side');

  function revealElements() {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('active');
      }, 500 * index);
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealElements();
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});