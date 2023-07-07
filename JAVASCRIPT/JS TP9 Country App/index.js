// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
let dataCountries;
let dataCountryCard;
const countries = document.querySelector(".countries-container");
const search = document.getElementById("inputSearch");
let searchValue = "";

search.addEventListener("input", (e) => {
  searchValue = e.target.value;
  // console.log(searchValue);
});

async function fetcher() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  dataCountries = data;

  dataCountryCard = dataCountries.map((country) => {
    if (country.name.official.includes(searchValue)) {
      return {
        flag: country.flags.svg,
        flagAlt: country.flags.alt,
        name: country.name.official,
        capital: country.capital,
        population: country.population,
      };
    }
  });
  // console.log(dataCountryCard);
  dataCountryCard.forEach((country) => {
    countries.innerHTML += `
    <div class="card">
    <img src="${country.flag}" alt="${country.flagAlt}">
    <h2>${country.name}</h2>
    <h3>${country.capital}</h3>
    <p>${country.population}</p>
    </div>
    `;
  });
}

fetcher();

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// country.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
