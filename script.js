// ===== Menu Hamburguer =====
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.innerHTML = nav.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// ===== Feedback do Formulário =====
const form = document.querySelector("#contact-form");
const feedback = document.querySelector(".mensagem-feedback");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    feedback.textContent = "Mensagem enviada com sucesso!";
    feedback.style.display = "block";
    form.reset();

    setTimeout(() => {
        feedback.style.display = "none";
    }, 3000);
});

