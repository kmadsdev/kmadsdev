<div class="carousel">
  <img src="KMADS1.png" class="slide" />
  <img src="KMADS2.png" class="slide" />
  <img src="KMADS3.png" class="slide" />
  <img src="KMADS4.png" class="slide" />
  <img src="KMADS5.png" class="slide" />
</div>
<button id="prevBtn">Previous</button>
<button id="nextBtn">Next</button>

<style>
.carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 100%;
  display: none;
}

/* Additional styling as needed */
</style>

<script>
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();

// Optional: add functionality for next and previous buttons
document.getElementById("prevBtn").addEventListener("click", () => {
  slideIndex -= 2;
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  showSlides();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (slideIndex >= slides.length - 1) { slideIndex = -1; }
  showSlides();
});
</script>

- 👋 Olá, me chamo 'Kaique' e tenho 15 anos, obrigado por estar visitando meu perfil. Aqui estão mais informações sobre mim:
- 📆 Aprendendo sobre tecnologia desde 2018.
- 📚 1º Ano Tecnico (desenvolvimento de sistemas).
- 💻 Atualmente estudando: Python, Java, JavaScript, SQL, HTML & CSS, GIT e Linux.
- 💼 Já fiz projetos para o Discord, sites simples em HTML/CSS, jogos, livros e outras coisas.
- 🎨 Também sou designer (imagens em 2D e edição de videos), aprendendo a criar imagens, animações e modelos em 3D.
- 🤝 Tenha um ótimo dia.
