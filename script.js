    // Simple scroll animation (Intersection Observer)
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    let heroIndex = 0;
let serviceIndex = 0;

function showSlide(type, index) {
  const slideSelector = type === 'hero' ? '.hero-carousel .slides' : '.service-carousel .slides';
  const slides = document.querySelector(slideSelector);
  const totalSlides = slides.children.length;
  const width = slides.children[0].clientWidth;
  
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  if (type === 'hero') heroIndex = index;
  if (type === 'service') serviceIndex = index;

  slides.style.transform = `translateX(-${index * width}px)`;
}

function nextSlide(type) {
  if (type === 'hero') showSlide('hero', ++heroIndex);
  if (type === 'service') showSlide('service', ++serviceIndex);
}

function prevSlide(type) {
  if (type === 'hero') showSlide('hero', --heroIndex);
  if (type === 'service') showSlide('service', --serviceIndex);
}

// Auto-play hero carousel
setInterval(() => nextSlide('hero'), 5000);




