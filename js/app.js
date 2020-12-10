'use strict';

import fetchUsersFromApi from './api/Fetch.js';
import buildUserProfileComponent from './components/UserProfile.component.js';

const ammountOfUsers = prompt();

const apiUrl = `https://randomuser.me/api/?results=${ammountOfUsers}`;

async function mountUserProfileComponents(url) {
  const userProfiles = await fetchUsersFromApi(url);
  for (const user of userProfiles) {
    buildUserProfileComponent(user);
  }
}

mountUserProfileComponents(apiUrl);
