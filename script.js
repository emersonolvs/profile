// Alternar modo claro/escuro
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = '🌙';
toggleThemeButton.style.position = 'fixed';
toggleThemeButton.style.top = '10px';
toggleThemeButton.style.left = '10px';
toggleThemeButton.style.padding = '10px';
toggleThemeButton.style.borderRadius = '50%';
toggleThemeButton.style.border = 'none';
toggleThemeButton.style.cursor = 'pointer';
toggleThemeButton.style.zIndex = '1000';
toggleThemeButton.title = 'Alternar modo claro/escuro';
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleThemeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Animação suave dos cards ao rolar a página
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aparecer');
    }
  });
});

document.querySelectorAll('.card, .contato-card').forEach(el => observer.observe(el));

// Botão "Voltar ao topo"
const backToTop = document.createElement('button');
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 15px';
backToTop.style.fontSize = '20px';
backToTop.style.borderRadius = '50%';
backToTop.style.border = 'none';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '1000';
backToTop.title = 'Voltar ao topo';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menu ativo conforme a rolagem
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
