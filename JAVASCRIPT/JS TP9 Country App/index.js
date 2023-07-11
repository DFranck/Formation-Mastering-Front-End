// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// country.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
//==========================================
//EXERCICE
//==========================================
// let dataCountries;
// let dataCountryCard;
// const countries = document.querySelector(".countries-container");
// const search = document.getElementById("inputSearch");
// const range = document.getElementById("inputRange");
// let rangeValueDisplay = document.getElementById("rangeValue");
// let rangeValue = 24;
// let searchValue = "";
// const minToMax = document.getElementById("minToMax");
// const maxToMin = document.getElementById("maxToMin");
// const alpha = document.getElementById("alpha");
// let country;

// minToMax.addEventListener("click", () => {
//   minToMaxSort();
// });
// maxToMin.addEventListener("click", () => {
//   maxToMinSort();
// });
// alpha.addEventListener("click", () => {
//   alphaSort();
// });

// search.addEventListener("input", (e) => {
//   searchValue = e.target.value;
//   fetcher();
// });

// range.addEventListener("input", () => {
//   rangeValue = range.value;
//   rangeValueDisplay.innerText = rangeValue;
//   fetcher();
// });

// async function fetcher() {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const data = await response.json();
//   dataCountries = data;
//   dataCountryCard = dataCountries
//     .filter((country) =>
//       country.name.official.toUpperCase().includes(searchValue.toUpperCase())
//     )
//     .slice(0, rangeValue)
//     .map((country) => {
//       return {
//         flag: country.flags.svg,
//         flagAlt: country.flags.alt,
//         name: country.name.official,
//         capital: country.capital,
//         population: country.population,
//       };
//     });
//   displayCards();
// }

// displayCards = () => {
//   countries.innerHTML = "";
//   dataCountryCard.forEach((country) => {
//     countries.innerHTML += `
//     <div class="card">
//     <img src="${country.flag}" alt="${country.flagAlt}">
//     <h2>${country.name}</h2>
//     <h3>${country.capital}</h3>
//     <p>${country.population}</p>
//     </div>
//   `;
//   });
// };

// alphaSort = () => {
//   dataCountryCard.sort((a, b) => a.name.localeCompare(b.name));
//   displayCards();
// };

// minToMaxSort = () => {
//   dataCountryCard.sort((a, b) => a.population - b.population);
//   displayCards();
// };

// maxToMinSort = () => {
//   dataCountryCard.sort((a, b) => b.population - a.population);
//   displayCards();
// };

// fetcher();

//==========================================
//CORRECTION
//==========================================
const countriesContainer = document.querySelector(".countries-container");
const inputSearch = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const minToMax = document.getElementById("minToMax");
const maxToMin = document.getElementById("maxToMin");
const alpha = document.getElementById("alpha");
const btnSort = document.querySelectorAll(".btnSort");
let countriesData = [];
let countriesSort = "maxToMin";

async function fetcher() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      countriesData = data;
      console.log(countriesData);
    });
  countriesDisplay();
}

function countriesDisplay() {
  countriesContainer.innerHTML = countriesData
    .filter((country) =>
      country.translations.fra.common
        .toUpperCase()
        .includes(inputSearch.value.toUpperCase())
    )
    .sort((a, b) => {
      if (countriesSort === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      } else if (countriesSort === "minToMax") {
        return b.population - a.population;
      } else {
        return a.population - b.population;
      }
    })
    .slice(0, inputRange.value)
    .map(
      (country) =>
        `
    <div class="card">
      <img src="${country.flags.svg}" alt="c'est le drapeau de ${
          country.translations.fra.common
        }" >
      <h2>${country.translations.fra.common}</h2>
      <h4>${country.capital}</h4>
      <p>Population : ${country.population.toLocaleString()}</p>
    </div>
  `
    )
    .join("");
}

window.addEventListener("load", () => {
  fetcher();
});

inputSearch.addEventListener("input", () => {
  countriesDisplay();
});

inputRange.addEventListener("input", () => {
  rangeValue.innerText = inputRange.value;
  countriesDisplay();
});

btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    countriesSort = e.target.id;
    countriesDisplay();
  });
});

// maxToMin.addEventListener("click", () => {
//   countriesSort = "maxToMin";
//   countriesDisplay();
// });
// minToMax.addEventListener("click", () => {
//   countriesSort = "minToMax";
//   countriesDisplay();
// });
// alpha.addEventListener("click", () => {
//   countriesSort = "alpha";
//   countriesDisplay();
// });
