function toggleMenu() {
  const nav = document.querySelector('nav ul.nav-links');
  nav.classList.toggle('show');
}



const companyNames = [
  "Vertex Products & Services",
  "Vertex Digital Solutions",
  "Vertex Tech Services"
];

const slogans = [
  "Simple Solutions. Maximum Impact.",
  "Turning Ideas Into Digital Reality.",
  "Smart Technology for Growing Businesses.",
  "We Build. You Grow."
];

let companyIndex = 0;
let sloganIndex = 0;

setInterval(() => {
  document.getElementById("companyName").textContent =
    companyNames[companyIndex];

  document.getElementById("slogan").textContent =
    slogans[sloganIndex];

  companyIndex = (companyIndex + 1) % companyNames.length;
  sloganIndex = (sloganIndex + 1) % slogans.length;
}, 3000);


