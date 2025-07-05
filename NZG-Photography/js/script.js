// ===== BURGER MENU TOGGLE =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function updatePreview() {
  const item = document.getElementById('item').value;
  const image = document.getElementById('previewImage');

  if (item === 'blue-tee') {
    image.src = 'blue-tee.png';
  } else if (item === 'black-hoodie') {
    image.src = 'Hoodie-Black.png';
  } else if (item === 'white-hoodie') {
    image.src = 'white-hoodie.jpg';
  } else {
    image.src = 'images/placeholder.png';
  }
}

// ===== GALLERY IMAGE LOADING =====
document.addEventListener('DOMContentLoaded', () => {     
  const images = document.querySelectorAll('.gallery-grid img');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  images.forEach(image => {
    observer.observe(image);
  });
}

);

// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.getElementById('scrollToTopBtn'); 

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}); 

// ===== FORM VALIDATION =====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', (event) => {
    let valid = true;

    if (nameInput.value.trim() === '') {
      valid = false;
      alert('Please enter your name.');
    }

    if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
      valid = false;
      alert('Please enter a valid email address.');
    }

    if (messageInput.value.trim() === '') {
      valid = false;
      alert('Please enter your message.');
    }

    if (!valid) {
      event.preventDefault();
    }
  });
});


