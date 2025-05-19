/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  showInfo() {
    console.log(`User: ${this.username}, E-mail: ${this.email}`);
  }
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
const user1 = new User("Kielo", "kielo@email.com");
user1.showInfo();

/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/

const user2 = new User("Tommi", "tommi@email.com");
user2.showInfo();
user2.changeEmail("uusi@email.com");
user2.showInfo();

/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/

const theme = { name: "light", isActive: true };

document.getElementById("themeBtn").addEventListener("click", () => {
  if (theme.name === "light") {
    theme.name = "dark";
  } else {
    theme.name = "light";
  }
  // tehtävä pyysi, mutta tämä if/else osa ei ole tarpeellinen jotta toimii
  if (theme.name === "dark") {
    theme.isActive = true;
  } else {
    theme.isActive = false;
  }
  document.body.setAttribute("data-theme", theme.name);
});

/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/

const counter = { value: 0 };

const val = document.getElementById("val");
document.getElementById("inc").addEventListener("click", () => {
  console.log("increase clicked");
  counter.value++;
  val.textContent = counter.value;
});
document.getElementById("dec").addEventListener("click", () => {
  console.log("decrease clicked");
  counter.value--;
  val.textContent = counter.value;
});

/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/

const product = { name: "Tuote", price: 10.0, quantity: 1 };

document.getElementById("itemName").textContent = product.name;
document.getElementById("itemPrice").textContent = product.price;

const qtyInput = document.getElementById("qty");
const total = document.getElementById("total");

const updateTotal = () => {
  product.quantity = parseInt(qtyInput.value);
  total.textContent = `Yhteensä €${product.price * product.quantity}`;
};
qtyInput.addEventListener("input", updateTotal);
updateTotal();

/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/

class Task {
  constructor(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}
const tasks = [];

document.getElementById("addTask").addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("desc").value;
  const completed = document.getElementById("completed").checked;

  const task = new Task(title, description, completed);
  tasks.push(task);

  const li = document.createElement("li");
  li.textContent = `${task.title} - ${task.description} (${
    task.completed ? "completed" : "not finished"
  })`;
  document.getElementById("taskList").appendChild(li);
});

/* Tehtävä 7
Luo olio `weatherApp`, jossa on metodi `fetchWeather(city)`.
Käytä `fetch`-funktiota hakeaksesi säätietoja API:sta ja näytä ne HTML-elementissä.
(API: OpenWeather tai jokin muu ilmainen sää-API)
*/

/* Tehtävä 7
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getAge() {
    let age = new Date().getFullYear() - this.year;
    return age;
  }
}
const myCar = new Car("Toyota", "Yaris", 2022);

console.log(myCar.getAge());
document.getElementById("carInfo").textContent = `Auto: ${myCar.brand} ${
  myCar.model
}, Ikä: ${myCar.getAge()} vuotta`;

/* Tehtävä 8
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

const users = [
  {
    name: "Anna",
    score: 95,
  },
  {
    name: "Mikko",
    score: 82,
  },
  {
    name: "Sara",
    score: 88,
  },
];

const userList = document.getElementById("userList");

const renderSortedUsers = () => {
  // sort users based on score

  // Render users
  //userList.innerHTML = "";
  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = `${u.name} - ${u.score}`;
    userList.appendChild(li);
  });
  document.getElementById("sortUsers").addEventListener("click", () => {
    // sorts from biggest to smallest
    users.sort((a, b) => b.score - a.score);
    renderSortedUsers();
  });
};
renderSortedUsers();

/* Tehtävä 9
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/

const shoppingList = { items: [] };

const listElement = document.getElementById("list");

document.getElementById("addItem").addEventListener("click", () => {
  const item = document.getElementById("itemInput").value;
  if (item) {
    shoppingList.items.push(item);
    const li = document.createElement("li");
    li.textContent = item;
    //appendChild() is a DOM method used to add a new child node (like an element) to an existing parent node (like a <ul>, <div>, etc.).
    listElement.appendChild(li);
    document.getElementById("itemInput").value = "";
  }
});

/* Tehtävä 10
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/

const posts = [
  { title: "Postaus1", content: "Sisältö1", likes: 0 },
  { title: "Postaus1", content: "Sisältö2", likes: 0 },
];

const postsElement = document.getElementById("posts");

const renderPosts = () => {
  postsElement.innerHTML = "";
  posts.forEach((post, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${post.title}</strong>: ${post.content} <button data-id="${index}">Tykkää (${post.likes})</button>`;
    postsElement.appendChild(li);
  });
};

postsElement.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.getAttribute("data-id");
    posts[index].likes++;
    renderPosts();
  }
});
renderPosts(posts);

/* Tehtävä 11
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  inccreaseSalary(percentage) {
    this.salary = (this.salary * percentage).toFixed(2);
  }
  getInfo() {
    console.log(`Employee: ${this.name}, ${this.name}. Salary: ${this.salary}`);
  }
}
const employee1 = new Employee("Kalle", "Coder", 4000);
employee1.getInfo();
employee1.inccreaseSalary(1.1);
employee1.getInfo();

/* Tehtävä 12
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/

const timer = {
  seconds: 0,
  intervalID: null,
  start() {
    if (this.intervalID) return;
    this.intervalID = setInterval(() => {
      this.seconds++;
      document.getElementById("timer").textContent = this.seconds;
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalID);
    this.intervalID = null;
  },
};
document.getElementById("start").addEventListener("click", () => {
  console.log("start button clicked");
  timer.start();
});
document.getElementById("stop").addEventListener("click", () => {
  console.log("stop button clicked");
  timer.stop();
});

/* Tehtävä 13
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

document.getElementById("bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("nimi").value;
  const author = document.getElementById("kirjailija").value;
  const pages = document.getElementById("sivut").value;

  const book = new Book(title, author, pages);

  const li = document.createElement("li");
  li.textContent = `${book.title} by ${book.author} with ${book.pages} pages`;
  document.getElementById("books").appendChild(li);

  e.target.reset();
});

// other way  to do this

const bookForm = document.getElementById("bookForm");
const bookListElement = document.getElementById("books");
const titleInput = document.getElementById("nimi");
const authorInput = document.getElementById("kirjailija");
const pagesInput = document.getElementById("sivut");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = pagesInput.value.trim();

  const book = new Book(title, author, pages);
  const listItem = document.createElement("li");
  listItem.textContent = `${book.title} by ${book.author} with ${book.pages} pages`;
  bookListElement.appendChild(listItem);

  e.target.reset();
});

/* Tehtävä 14
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/

const foxTracker = { foxes: [] };

document.getElementById("addFox").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const location = document.getElementById("loc").value;
  if (name && location) {
    foxTracker.foxes.push({ name, loc });

    const li = document.createElement("li");
    li.textContent = `${name} @ ${location}`;
    document.getElementById("foxes").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("loc").value = "";
  }
});
