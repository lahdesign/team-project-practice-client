"use strict";
const blogApi = require("./blog/blogs-Api.js");

const authEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  blogApi()
  authEvents.addHandler()
})
