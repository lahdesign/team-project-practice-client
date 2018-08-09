"use strict";

// pretty much all of this file (actually, all the auth stuff)
// was taken from Tic Tac Toe, which was taken from the lessons

const store = require("../store.js");

const mismatchedPasswords = function() {
  document.getElementById("sign-up").reset();
  // message is on the modal
  $(".message").text(`Passwords don't match. Please sign up again.`);
};

const signUpSuccess = function(data) {
  console.log("sign up success ran");
  // removes user writing from forms
  document.getElementById("sign-up").reset();
  $(".message").text("Signed up successfully");
  // set timeout closes modal after one second (1000 milliseconds)
  window.setTimeout(closeModal, 1000);
};

const signUpFailure = function(err) {
  console.log("sign up failure ran");
  document.getElementById("sign-up").reset();
  $(".message").text("Error on sign up.");
};

const signInSuccess = function(data) {
  console.log("sign in success ran");
  document.getElementById("sign-in").reset();
  // message is on modal
  $(".message").text("Signed in successfully");
  // changes sign in/out buttons to display depending whether user is signed in
  $("#sign-up-button, #sign-in-button").css("display", "none");
  $("#sign-out-button, #change-password-button").css("display", "inline");
  // stores the user data.
  // used later to authenticate user w token
  store.user = data.user;
  console.log(store);

  setTimeout(closeModal, 1000);
};

const signInFailure = function(err) {
  document.getElementById("sign-in").reset();
  $(".message").text("Error on sign in. Please check your password.");
};

const changePasswordSuccess = function(data) {
  document.getElementById("change-password").reset();
  $(".message").text("Changed password successfully");
  window.setTimeout(closeModal, 1000);
};

const changePasswordFailure = function(err) {
  document.getElementById("change-password").reset();
  $(".message").text("Error on change password.");
};

const signOutSuccess = function(data) {
  // this message displays nowhere because there is no modal.
  // think it's okay b/c pretty obvious user signed out.
  $(".message").text("Signed out successfully");
  $("#sign-up-button, #sign-in-button").css("display", "inline");
  $("#sign-out-button, #change-password-button").css("display", "none");
  store.user = null;
};

// TODO probably need to introduce a modal for sign out error...
const signOutFailure = function(err) {
  document.getElementById("sign-out").reset();
  $(".message").text("Error on sign out.");
};

const closeModal = function() {
  $(".modal").css("display", "none");
  $(".message").text("");
};

module.exports = {
  mismatchedPasswords,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  closeModal
};
