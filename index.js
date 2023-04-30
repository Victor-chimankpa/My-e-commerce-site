const menu = document.querySelector("#toggle-nav");
const navbar = document.querySelector("#navbar");
const navClose = document.querySelector("#close");
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar-contain");
const filBtn = document.querySelector("#filbtn");
const filContent = document.querySelector(".filter-content");
const main = document.getElementById("main-img");
const  small = document.getElementsByClassName("small-img");



// NAVBAR SCRIPT
menu.onclick = () => {
  navbar.classList.toggle("active");
};

navClose.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.remove("bi-x-lg");
  searchBtn.classList.remove("bi-x-lg");
  searchBar.classList.remove("active");
  // filBtn.classList.remove("bi-caret-down-fill");
  // filContent.classList.remove("active");
};

// SEARCH BAR SCRIPTS

searchBtn.onclick = () => {
  searchBtn.classList.toggle("bi-x-lg");
  searchBar.classList.toggle("active");
};

// filBtn.onclick = () => {
//   filBtn.classList.toggle("bi-caret-down-fill");
//   filContent.classList.toggle("active");

// };


// COUNT DOWN SCRIPT

// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// PRODUCT DETAILS PAGE SCRIPT

small[0].onclick = function () {
  main.src = small[0].src;
};

small[1].onclick = function () {
  main.src = small[1].src;
};

small[2].onclick = function () {
  main.src = small[2].src;
};

small[3].onclick = function () {
  main.src = small[3].src;
};
