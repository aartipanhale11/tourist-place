// Fade-in on scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});



// Add fade-in animation when scrolling
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".food-card");
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.style.transition = "opacity 1s ease, transform 1s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Set initial style
document.querySelectorAll(".food-card").forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
});



//aboutus
 // Simple scroll fade-in animation
    const faders = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', () => {
      faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    });



  //gallery
  document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.transition = "0.8s";
      card.style.opacity = "1";
    }, index * 150);
  });
});



//contact form


const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
e.preventDefault();
const name = document.getElementById('name').value;
alert('Thank you ' + name + '! Your message has been sent successfully.');
form.reset();
});