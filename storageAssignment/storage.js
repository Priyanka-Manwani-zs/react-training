const form = document.getElementById("user-info-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const greetingMessage = document.getElementById("greeting-message");

document.addEventListener("DOMContentLoaded", () => {
  const storedName = localStorage.getItem("name");
  const storedEmail = localStorage.getItem("email");
  const storedGreeting = sessionStorage.getItem("greeting");

  if (storedName && storedEmail) {
    greetingMessage.innerHTML = `Hello, ${storedName}! Your email is ${storedEmail}.`;
  }

  if (storedGreeting) {
    greetingMessage.innerHTML += `<br>${storedGreeting}`;
  }

  applyTheme();
});

function setcookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // set expiration time, the no of days is converted into time and added to current time
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`; // adding cookie into the browser
}

function getcookie(name) {
  // func to get the cookie we are searchig for
  const themeKey = name + "="; // cookie are stored in the form of string of a key=value pair seperataed by semi colons

  const cookies = document.cookie.split(";"); // seperatinf the strings by semi colons and converting it into te array

  for (let i = 0; i < cookies.length; i++) {
    //iterating the loop over array and of each index checking if the string is starting with the nameof our kely that is theme=
    let cookie = cookies[i].trim();
    if (cookie.indexOf(themeKey) === 0) {
      return cookie.substring(themeKey.length, cookie.length); // if it matches than we get the value of the key by using substring method having starting index as the len of key and end as the length of cookie string. so here we will get "dark"
    }
  }
  return null;
}

function applyTheme() {
  const theme = getcookie("theme");
  console.log("value pf theme", theme);
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("dark-mode");
  console.log("classes in body:", document.body.classList);

  // Save the theme preference in a cookie for 7 days
  const theme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  setcookie("theme", theme, 7);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  greetingMessage.innerHTML = `Hello, ${name}! and  Your email is ${email}.`;
});

sessionStorage.setItem("greeting", "Welcome back!");
