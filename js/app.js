const apiUrl = `https://randomuser.me/api/?results=5`;

async function getUsers() {
  const users = await (await fetch(apiUrl)).json();
  console.log(users.results);
}

function buildUserProfile(userData) {
  const main = document.querySelector('main');
  const article = document.createElement('article');
  const header = document.createElement('header');
  const img = document.createElement('img');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  main.appendChild(article);
  article.appendChild(header);
  header.appendChild(img);
  header.appendChild(h1);
  article.appendChild(p);

  img.setAttribute('src', userData.picture.large);
  h1.textContent = `${userData.name.first} ${userData.name.last}`;
}
/*
const users = getUsers();
 */
/* async function buildUsers() {
  const users = await (await getUsers()).json();
  for (const user of users) {
    buildUserProfile(user);
  }
} */

buildUsers(userData);
