// box 1
const btn = document.querySelector(".but1");
const text = document.querySelector(".text");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

btn.addEventListener("click", () => {
  text.classList.toggle("show");

  if (text.classList.contains("show")) {
    plus.style.display = "none";
    minus.style.display = "block";
  } else {
    plus.style.display = "block";
    minus.style.display = "none";
  }
});

// box 2
const btn2 = document.querySelector(".but2");
const text2 = document.querySelector(".text2");
const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");

btn2.addEventListener("click", () => {
  text2.classList.toggle("show");

  if (text2.classList.contains("show")) {
    plus2.style.display = "none";
    minus2.style.display = "block";
  } else {
    plus2.style.display = "block";
    minus2.style.display = "none";
  }
});

// box 3
const btn3 = document.querySelector(".but3");
const text3 = document.querySelector(".text3");
const plus3 = document.querySelector(".plus3");
const minus3 = document.querySelector(".minus3");

btn3.addEventListener("click", () => {
  text3.classList.toggle("show");

  if (text3.classList.contains("show")) {
    plus3.style.display = "none";
    minus3.style.display = "block";
  } else {
    plus3.style.display = "block";
    minus3.style.display = "none";
  }
});

// box 4
const btn4 = document.querySelector(".but4");
const text4 = document.querySelector(".text4");
const plus4 = document.querySelector(".plus4");
const minus4 = document.querySelector(".minus4");

btn4.addEventListener("click", () => {
  text4.classList.toggle("show");

  if (text4.classList.contains("show")) {
    plus4.style.display = "none";
    minus4.style.display = "block";
  } else {
    plus4.style.display = "block";
    minus4.style.display = "none";
  }
});

// box 5
const btn5 = document.querySelector(".but5");
const text5 = document.querySelector(".text5");
const plus5 = document.querySelector(".plus5");
const minus5 = document.querySelector(".minus5");

btn5.addEventListener("click", () => {
  text5.classList.toggle("show");

  if (text5.classList.contains("show")) {
    plus5.style.display = "none";
    minus5.style.display = "block";
  } else {
    plus5.style.display = "block";
    minus5.style.display = "none";
  }
});
