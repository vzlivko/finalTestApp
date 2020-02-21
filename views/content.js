"use strict";

function homePage() {
  $(document).ready(() => {
    $("body")
      .append(`<button id='registration'>Registration</button>`)
      .append(`<button id='login'>Log in</button>`)
      .append("<h1>Welcome to MusicBox</h1>");
    $("#registration").on("click", () => {
      location.href = "http://localhost:7777/registration";
    });
    $("#login").on("click", () => {
      location.href = "http://localhost:7777/login";
    });
  });
}

function loginPage() {
  $(document).ready(() => {
    $("body").append('<form action="/login" method="post">');
    $("form")
      .append("<h1>Log in</h1>")
      .append("<p>Email</p>")
      .append('<input type="text" name="email" required>')
      .append("<p>Password</p>")
      .append('<input type="password" name="password" required>')
      .append('<p><input type="submit" value="Send">');
  });
}

function registrationPage() {
  $(document).ready(() => {
    $("body").append('<form action="/registration" method="post">');
    $("form")
      .append("<h1>Registration</h1>")
      .append("<p>User name</p>")
      .append('<input type="text" name="username" required>')
      .append("<p>Email</p>")
      .append('<input type="text" name="email" required>')
      .append("<p>Password</p>")
      .append('<input type="password" name="password" required minlength=8>')
      .append("<p>Confirm password</p>")
      .append(
        '<input type="password" name="confirmPassword" required minlength=8>'
      )
      .append("<p>Name</p>")
      .append('<input type="text" name="name">')
      .append("<p>Family name</p>")
      .append('<input type="text" name="familyName">')
      .append("<p>Birthday</p>")
      .append('<input type="date" name="birthday">')
      .append('<p><input type="submit" value="Send">');
  });
}

if (location.pathname == "/") homePage();
if (location.pathname == "/login") loginPage();
if (location.pathname == "/registration") registrationPage();
