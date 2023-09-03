const btnGet = document.querySelector(".btn-get-posts");
const btnPush = document.querySelector(".btn-push-post");
const container = document.querySelector(".container");

function getRequest(cb) {
  // Задаем переменные нового xhr и необходимого URL
  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/todos";
  // Инициализируем новый запрос с тегом 'get'
  xhr.open("get", url);
  // Отправляем запрос
  xhr.send();
  // Ставим слушатель события на загрузку
  xhr.addEventListener("load", () => {
    // Задаем переменную для полученного через запрос текста
    const response = JSON.parse(xhr.responseText);
    // Возвращаем коллбек функцию с переданным в неё полученным текстом
    return cb(response);
  });
}

function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/posts";
  xhr.open("post", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify(body));
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    return cb(response);
  });
}

// Создание одной карточки
function cardTemplate(post) {
  // Создаем блочный элемент div для карты
  const card = document.createElement("div");
  // Создаем блочный элемент div для тела карты
  const cardBody = document.createElement("div");
  // Добавляем класс для div тела карты
  cardBody.classList.add("card-body");
  // Создаем заголовок
  const title = document.createElement("h5");
  // Добавляем класс для заголовка
  title.classList.add("title");
  // Присваиваем текст полученного элемента текстовому контексту заголовка
  title.textContent = post.title;
  // Создаем параграф
  const status = document.createElement("p");
  // Присваиваем параграфу класс статус
  status.classList.add("status");
  // Присваиваем текст полученного элемента текстовому контексту параграфа
  status.textContent = post.completed;
  // До,авляем узел title в конец списка дочерних элементов узла cardBody
  cardBody.appendChild(title);
  // До,авляем узел status в конец списка дочерних элементов узла cardBody
  cardBody.appendChild(status);
  // До,авляем узел cardBody в конец списка дочерних элементов узла card
  card.appendChild(cardBody);
  // Возвращаем собранную карточку
  return card;
}

// Обрабатываем полученный текст в коллбек функции
function makeCards() {
  getRequest((request) => {
    // Создаем родительский фрагмент для всех карт
    // DocumentFragment представляет собой минимальный объект документа, который не имеет родителя
    const fragment = document.createDocumentFragment();
    // Перебираем все таски из полученного массива
    request.forEach((post) => {
      const card = cardTemplate(post);
      // Добавляем узел card в конец списка дочерних элементов объект fragment
      fragment.appendChild(card);
    });
    // Доавляем объект fragment в конец списка дочерних элементов для блока container
    container.appendChild(fragment);
  });
}

// Вешаем обработчик события click на кнопку
btnGet.addEventListener("click", () => {
  // Вызываем функцию запроса
  // Передаем в нее функцию создания карт в качестве коллбека
  getRequest(makeCards);
});

// Вешаем обработчик события click на кнопку
btnPush.addEventListener("click", () => {
  const newPost = {
    title: "Denis",
    completed: "On process",
    id: 1,
  };
  // Создаем пост, передавая готовый newPost
  createPost(newPost, (response) => {
    const card = cardTemplate(response);
    container.insertAdjacentElement("afterbegin", card);
  });
});
