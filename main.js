import { countArraElements, handleCityClick } from "./src/stuff.js";

const app = document.getElementById("app");

const liContainer = document.createElement("ul");
liContainer.classList.add("li-container");
const createLi = (content) => {
  const li = document.createElement("li");
  li.classList.add("li-element");
  li.innerHTML = content;
  return li;
};

const cities = [
  "Madrid",
  "Madrid",
  "Madrid",
  "Madrid",
  "Las Vegas",
  "Las Vegas",
  "Las Vegas",
  "Los Santos",
  "Los Santos",
  "New York",
  "New York",
  "New York",
  "New York",
  "Los Angeles",
  "Los Angeles",
  "Los Angeles",
  "Londres",
  "Londres",
  "Londres",
  "Tampa",
  "Tampa",
  "Tampa",
  "Tampa",
  "Tampa",
  "Tampa",
  "Miami",
  "Miami",
  "Miami",
  "Miami",
];

const countedCities = countArraElements(cities);
let shortedCountedCities = Object.entries(countedCities).sort(
  (a, b) => b[1] - a[1]
);

function drawAndUpdateCities() {
  liContainer.innerHTML = "";
  if (shortedCountedCities.length === 0)
    liContainer.appendChild(document.createTextNode("No cities"));
  shortedCountedCities.forEach((city) => {
    const [cityName, counter] = city;
    for (let i = 0; i < counter; i++) {
      const newLiElement = createLi(cityName);
      newLiElement.addEventListener("click", ({ target }) => {
        shortedCountedCities = handleCityClick(
          target.innerHTML,
          shortedCountedCities
        );
        drawAndUpdateCities();
      });
      liContainer.appendChild(newLiElement);
    }
  });
}

drawAndUpdateCities();

console.log(
  "Ciudades con su respectivo numero de apariciones\n",
  countedCities
);
app.appendChild(liContainer);
