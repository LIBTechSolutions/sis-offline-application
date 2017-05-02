'use strict'

import $ from 'jquery'

export function setUsers(users) {
  if ($.isArray(users)) {
    localStorage.setItem('users', JSON.stringify(users))
    return users
  }
}

export function getUsers() {
  let stringUsers = localStorage.getItem('users')
  let users = []

  try {
    users = JSON.parse(stringUsers)
  } catch (e) {

  }

  return $.isArray(users) ? users : []
}

export function filterUsers (users, searchText) {
  let filteredUsers = users


  filteredUsers = filteredUsers.filter((user) => {
    let text = user.yourName.toLowerCase();
    return searchText.length === 0 || text.indexOf(searchText) > -1;
  });

  return filteredUsers
}
