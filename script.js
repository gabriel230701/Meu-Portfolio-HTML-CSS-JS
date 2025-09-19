/* -----------------------------
  Animação de scroll fade-in
------------------------------ */
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);
faders.forEach(fader => appearOnScroll.observe(fader));

/* -----------------------------
  Header muda cor ao scroll
------------------------------ */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* -----------------------------
  Validação simples do formulário
------------------------------ */
const formulario = document.querySelector('form');
const mensagem = document.querySelector('.mensagem-feedback');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    const nome = formulario.nome.value.trim();
    const email = formulario.email.value.trim();
    const mensagemTexto = formulario.mensagem.value.trim();

    if (nome && email && mensagemTexto) {
        mensagem.textContent = "Mensagem enviada com sucesso!";
        mensagem.style.color = "lightgreen";
        formulario.reset();
    } else {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
    }
});

