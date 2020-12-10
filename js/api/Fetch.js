'use strict';

import UserProfile from '../models/UserProfile.class.js';

export default async function fetchUsersFromApi(apiUrl) {
  const users = await (await fetch(apiUrl)).json();
  const arrOfUsers = [];
  for (const user of users.results) {
    const date = new Date(user.dob.date);
    arrOfUsers.push(
      new UserProfile(
        user.name.first,
        user.name.last,
        user.location.city,
        user.location.country,
        date.getFullYear(),
        user.picture.large
      )
    );
  }
  return arrOfUsers;
}
