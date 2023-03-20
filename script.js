const COMPANIES_DATA = [
  {
    logo: "../assets/levva.jpeg",
    name: "Levva",
    role: "Desenvolvedor Frontend Pleno",
  },
  {
    logo: "../assets/cpqi.jpeg",
    name: "CPQi Group",
    role: "Desenvolvedor Frontend Junior",
  },
  {
    logo: "../assets/govbr.jpeg",
    name: "GOVBR",
    role: "Desenvolvedor Frontend Junior",
  },
  {
    logo: "../assets/petros.jpeg",
    name: "Petros",
    role: "Estágio em Desenvolvimento de Software",
  },
  {
    logo: "../assets/ibge.jpeg",
    name: "IBGE",
    role: "Estágio em Desenvolvimento de Software",
  },
];

const play_btn = document.getElementById("play-icon");
const audio_player = document.getElementById("music-player");
const heartIcon = document.getElementById("heart");
const addFavorite = document.querySelector("#add-favorite");

function updatePlayer() {
  audio_player.src = "../music/song.mp3";
}

updatePlayer();

function togglePlaySong() {
  if (audio_player.paused) {
    audio_player.play();
    play_btn.innerHTML = "pause_circle";
  } else {
    audio_player.pause();
    play_btn.innerHTML = "play_circle";
  }
}

play_btn.addEventListener("click", togglePlaySong);

heartIcon.addEventListener("click", () => {
  if (heartIcon.classList.contains("animation")) {
    heartIcon.style.fontVariationSettings = "";
    heartIcon.style.color = "#fff";
    heartIcon.classList.remove("animation");
  } else {
    heartIcon.style.fontVariationSettings =
      "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48";
    heartIcon.style.color = "#1cd760";
    heartIcon.classList.add("animation");
  }
});

function createCard() {
  COMPANIES_DATA.forEach((company) => {
    const card = ` <div class="company-card">
<img src=${company.logo} class="company-img" alt=${company.name} />
<p class="title-text">${company.name}</p>
<p class="description-text">${company.role}</p>
<div class="description-button"></div>
</div>`;
    const element = document.createElement("div");
    const companyCard = document.querySelector(".companies");
    element.innerHTML = card;
    companyCard.appendChild(element);
  });
}

createCard();
