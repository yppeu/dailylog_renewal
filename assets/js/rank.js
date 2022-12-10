let lanknav = document.querySelector(".ranking_category ul");

let BASE_COLOR = "#fffff";
let OTHER_COLOR = "#35B8E1";

//함수만들어준다.
function handClick() {
  console.log(1);
  let currentColor = lanknav.style.color;
  if (currentColor === OTHER_COLOR) {
    lanknav.style.color = BASE_COLOR;
    lanknav.style.backgroundColor = OTHER_COLOR;
  } else {
    lanknav.style.color = OTHER_COLOR;
    lanknav.style.backgroundColor = BASE_COLOR;
  }
}

//초기화값
function init() {
  lanknav.style.color = OTHER_COLOR;
  lanknav.style.backgroundColor = BASE_COLOR;
  lanknav.addEventListener("click", handClick);
}

//초기값 실행
init();

// function handleClick() {
//   lanknav.style.color = "#fff";
//   lanknav.style.backgroundColor = "#0a87ad";
// }

// lanknav.addEventListener("click", handleClick);

// lanknav.addEventListener("click", (e) => {
//   lanknav.classList.toggle("active");
// });
