// 햄버거 메뉴 클릭시
let toggleBT = document.querySelector(".nav_toogleBT");
let menu = document.querySelector(".navbar_menu");

toggleBT.addEventListener("click", () => {
  console.log(1);
  menu.classList.toggle("active");
});

// 제이쿼리 풀페이지
// $("#fullpage").fullpage({
//   //options here
//   autoScrolling: true,
//   scrollHorizontally: true,
//   navigation: true,
//   navigationPosition: "right",
// });

// //기본 셋팅
// const swiper = new Swiper(".swiper-container", {
//   scrollbar: {
//     // 스크롤바
//     el: ".swiper-scrollbar",
//     draggable: true, // 스크롤바를 드래그해서 움직일수 있는지 여부
//   },

//   //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
//   direction: "vertical",

//   //한번에 보여지는 페이지 숫자
//   slidesPerView: 1,

//   //페이지와 페이지 사이의 간격
//   spaceBetween: 20,

//   //드레그 기능 true 사용가능 false 사용불가
//   //   debugger: true,

//   //마우스 휠기능 true 사용가능 false 사용불가
//   mousewheel: true,

//   //반복 기능 true 사용가능 false 사용불가
//   loop: true,

//   //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
//   centeredSlides: true,

//   // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
//   effect: "fade",
//   speed: 500,

//   //자동 스크를링
//   autoplay: {
//     //시간 1000 이 1초
//     delay: 3500,
//     disableOnInteraction: false,
//   },

//   //페이징
//   pagination: {
//     //페이지 기능
//     el: ".swiper-pagination",
//     //클릭 가능여부
//     clickable: true,
//   },

//   //방향표
//   navigation: {
//     //다음페이지 설정
//     nextEl: ".swiper-button-next",
//     //이전페이지 설정
//     prevEl: ".swiper-button-prev",
//   },
// });
