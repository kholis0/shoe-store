// FAQ toggle script 
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('show');
    });
    item.addEventListener('keypress', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.classList.toggle('show');
      }
    });
  });

  // JavaScript to add 'active' class to navbar links based on current URL hash
  const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function onScroll() {
  let scrollPos = window.scrollY || window.pageYOffset;
  let found = false;

  sections.forEach(section => {
    const top = section.offsetTop - 110; // offset navbar
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
      found = true;
    }
  });

  // If it's at the bottom, force Contact to be active
  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#contact');
    });
  }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

  
