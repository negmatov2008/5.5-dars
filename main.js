const imgesEl = document.querySelectorAll(".imag");
const textsEl = document.querySelectorAll(".text");
let urin1 = 0;
let urin2 = 0;
let urin3 = 0;
let urin4 = 0;
imgesEl.forEach((img) => {
  img.addEventListener("click", () => {
    if (img == imgesEl[0]) {
      urin1++;
      if (urin1 == 1) {
        img.setAttribute("src", "./plus.png");
        textsEl.forEach((text) => {
          if (text == textsEl[0]) {
            text.classList.add("hidden");
          }
        });
      } else {
        img.setAttribute("src", "./minus.png");
        textsEl.forEach((text) => {
          if (text == textsEl[0]) {
            text.classList.remove("hidden");
          }
        });
      }
      if (urin1 == 2) {
        urin1 = 0;
      }
    } else if (img == imgesEl[1]) {
      urin2++;
      if (urin2 == 1) {
        img.setAttribute("src", "./plus.png");
        textsEl.forEach((text) => {
          if (text == textsEl[1]) {
            text.classList.add("hidden");
          }
        });
      } else {
        img.setAttribute("src", "./minus.png");
        textsEl.forEach((text) => {
          if (text == textsEl[1]) {
            text.classList.remove("hidden");
          }
        });
      }
      if (urin2 == 2) {
        urin2 = 0;
      }
    } else if (img == imgesEl[2]) {
      urin3++;
      if (urin3 == 1) {
        img.setAttribute("src", "./plus.png");
        textsEl.forEach((text) => {
          if (text == textsEl[2]) {
            text.classList.add("hidden");
          }
        });
      } else {
        img.setAttribute("src", "./minus.png");
        textsEl.forEach((text) => {
          if (text == textsEl[2]) {
            text.classList.remove("hidden");
          }
        });
      }
      if (urin3 == 2) {
        urin3 = 0;
      }
    } else if (img == imgesEl[3]) {
      urin4++;
      if (urin4 == 1) {
        img.setAttribute("src", "./plus.png");
        textsEl.forEach((text) => {
          if (text == textsEl[3]) {
            text.classList.add("hidden");
          }
        });
      } else {
        img.setAttribute("src", "./minus.png");
        textsEl.forEach((text) => {
          if (text == textsEl[3]) {
            text.classList.remove("hidden");
          }
        });
      }
      if (urin4 == 2) {
        urin4 = 0;
      }
    }
  });
});
