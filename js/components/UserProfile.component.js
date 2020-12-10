'use strict';

export default function buildUserProfileComponent(user) {
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

  img.setAttribute('src', user.img);
  img.setAttribute('loading', 'lazy');
  h1.textContent = `${user.firstName} ${user.lastName}`;
  p.textContent = `${user.city} (${user.country}), ${user.yearOfBirthday}`;
}
