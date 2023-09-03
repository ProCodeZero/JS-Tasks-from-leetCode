const inputSearch = document.querySelector(".search");
const inputContainer = document.querySelector(".dropdown-container");
const chosens = document.querySelector(".chosens");
const urlSearchRepositories = new URL(
  "https://api.github.com/search/repositories"
);
// Удаляем выбранный элемент по нажатию на кнопку
chosens.addEventListener("click", function (event) {
  let target = event.target;
  if (!target.classList.contains("btn-close")) return;
  target.parentElement.remove();
});
// Очищаем пле ввода по клику на один из выпадающих элементов,
// добавляем выбранный элемент в постоянный список,
// ощищаем выброшенные элементы.
inputContainer.addEventListener("click", function (event) {
  let target = event.target;
  if (
    !target.classList.contains("dropdown-content") &&
    !target.classList.contains("mark")
  ) {
    return;
  }
  addChosen(target);
  inputSearch.value = "";
  removePredictions();
});

inputSearch.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value == "") {
    removePredictions();
    return;
  }
  appendParam("q", value);
});
// функция, которая заменяет содержимое тела пустой строкой.
function removePredictions() {
  inputContainer.replaceChildren();
}
// Создаем функцию, которая выводит на экран репозитории
function showPredictions(repositories) {
  removePredictions();
  for (
    let repositoryIndex = 0;
    repositoryIndex < repositories.items.length;
    repositoryIndex++
  ) {
    let name = repositories.items[repositoryIndex].name;
    let owner = repositories.items[repositoryIndex].owner.login;
    let stars = repositories.items[repositoryIndex].stargazers_count;
    let reg = new RegExp(inputSearch.value, "gi");
    let markName = name.replace(reg, function (str) {
      return '<mark class="mark">' + str + "</mark>";
    });
    let dropdownContent = `<div class="dropdown-content" data-owner="${owner}" data-stars="${stars}">${markName}</div>`;
    inputContainer.innerHTML += dropdownContent;
  }
}

// Создаем функцию, которая добавляет элемент в chosens
function addChosen(target) {
  let name = target.textContent;
  let owner = target.dataset.owner;
  let stars = target.dataset.stars;
  chosens.innerHTML += `<div class="chosen">Name: ${name}<br>Owner: ${owner}<br>Stars: ${stars}<button class="btn-close"></button></div>`;
}

function appendParam(key, value) {
  return urlSearchRepositories.searchParams.append(key, value);
}
// Создаем асинхронную функцию, которая принимает репозитории из gitHub
async function getPredictions() {
  urlSearchRepositories.searchParams.append("per_page", 5);
  try {
    let response = await fetch(urlSearchRepositories);
    if (response.ok) {
      let repositories = await response.json();
      showPredictions(repositories);
    } else return null;
  } catch (error) {
    return null;
  }
}

function debounce(fn, timeout) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(fn(...args)), timeout);
    });
  };
}

const getPredictionsDebounce = debounce(getPredictions, 500);
inputSearch.addEventListener("input", getPredictionsDebounce);