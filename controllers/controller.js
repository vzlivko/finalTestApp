"use strict";
const User = require("../models/user");
const Track = require("../models/music");
const content = "/home/user/finalTestApp/views/page.html";
const bcrypt = require("bcrypt");
const saltRounds = 5;

exports.homePage = (req, res) => {
  res.sendFile(content);
};
exports.userHomePage = (req, res) => {
  const trackList = [];
  Track.find((err, item) => {
    if (err) return next(err);
    trackList.push(item);
  }).then(resolve => {
    res.render("homepage", { tracklist: trackList[0] });
  });
};
exports.myMusic = (req, res) => {
  res.send("my music");
};
exports.profilePage = (req, res) => {};
exports.updateProfile = (req, res) => {};
exports.loginPage = (req, res) => {
  res.sendFile(content);
};
exports.loginResult = async (req, res) => {
  const { email, password } = req.body;
  const loggedUser = await User.findOne({ email: email });
  if (loggedUser) {
    bcrypt.compare(password, loggedUser.password, (err, result) => {
      if (err) return next(err);
      if (result)
        res.render("redirect", {
          title: "Login",
          text: `Welcome, ${email}`,
          url: email,
          linkText: "Go to home page"
        });
      else
        res.render("redirect", {
          title: "Login",
          text: `Wrong password`,
          url: "login",
          linkText: "Back to login page"
        });
    });
  } else {
    res.render("redirect", {
      title: "Login",
      text: `User with email "${email}" doesnt exists`,
      url: "login",
      linkText: "Back to login page"
    });
  }
};
exports.registrationPage = (req, res) => {
  res.sendFile(content);
};
exports.registrationResult = async (req, res) => {
  const {
    username,
    email,
    password,
    confirmPassword,
    name,
    familyName,
    birthday
  } = req.body;
  const newUser = await User.findOne({ email: email });
  if (newUser)
    res.render("redirect", {
      title: "Registration",
      text: `User with email "${email}" is already exists`,
      url: "registration",
      linkText: "Back to registration page"
    });
  else {
    if (password == confirmPassword) {
      bcrypt.hash(password, saltRounds, async (err, pass) => {
        if (err) return next(err);
        const user = new User({
          username: username,
          email: email,
          password: pass,
          confirmPassword: pass,
          name: name,
          familyName: familyName,
          birthday: birthday
        });
        try {
          await user.save();
          res.render("redirect", {
            title: "Registration",
            text: `New user ${username} successfully registered`,
            url: "",
            linkText: "Go to home page"
          });
        } catch (e) {
          throw e;
        }
      });
    } else {
      res.render("redirect", {
        title: "Registration",
        text: "Passwords must be the same",
        url: "registration",
        linkText: "Back to registration page"
      });
    }
  }
};
