'use strict';

export default class UserProfile {
  firstName;
  lastName;
  city;
  country;
  yearOfBirthday;
  img;

  constructor(firstName, lastName, city, country, yearOfBirthday, img) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
    this.yearOfBirthday = yearOfBirthday;
    this.img = img;
  }
}
