const COMPANIES_DATA = [
  {
    logo: "../../../assets/levva.jpeg",
    name: "Levva",
    role: "Middle Frontend Developer",
  },
  {
    logo: "../../../assets/cpqi.jpeg",
    name: "CPQi Group",
    role: "Junior Frontend Developer",
  },
  {
    logo: "../../../assets/govbr.jpeg",
    name: "GOVBR",
    role: "Junior Frontend Developer",
  },
  {
    logo: "../../../assets/petros.jpeg",
    name: "Petros",
    role: "Software Developer Intern",
  },
  {
    logo: "../../../assets/ibge.jpeg",
    name: "IBGE",
    role: "Software Developer Intern",
  },
];

function createCard() {
  COMPANIES_DATA.forEach((company, index) => {
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
