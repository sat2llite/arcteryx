// 햄버거 메뉴
const hamburgerMenu = document.querySelector(".m_header_ul");
const hamburgerIcon = document.querySelector(".hamburger");
const hamburgerIconOn = document.querySelector(".hamburger.on");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("on");
  document.body.classList.toggle("no_scroll");

  if (hamburgerIcon.classList.contains("on")) {
    hamburgerMenu.style.visibility = "visible";
    hamburgerMenu.style.opacity = "1";
    gnb.style.visibility = "hidden";
  } else {
    hamburgerMenu.style.visibility = "hidden";
    hamburgerMenu.style.opacity = "0";
    gnb.style.visibility = "visible";
  }
});

// 슬라이더
const slides = document.querySelector(".slide_ul");
const slideImg = document.querySelectorAll(".slide_li");
const imgWidth = slideImg[0].children[0].offsetWidth; // 이미지 가로길이
const slideCount = slideImg.length;

slides.style.width = `${imgWidth * (slideCount + 2)}px`;
// 양 옆에 복사해 넣을 것도 고려해야 함

let currentIndex = 0; // 현재 슬라이드 index
let speed = 0.5;

function makeClone() {
  let clone_first = slideImg[0].cloneNode(true);
  let clone_last = slides.lastElementChild.cloneNode(true);
  slides.append(clone_first);
  // slides.prepend(clone_last);
  slides.firstElementChild.before(clone_last); // 위 코드와 동일
  // ul안에 있는 첫 번째 자식 앞에 마지막 것을 복사하여 집어넣음
}

function initFunction() {
  slides.style.width = `${imgWidth * (slideCount + 2)}px`;
  slides.style.left = `-${imgWidth + 20}px`;
}

function next() {
  if (currentIndex < slideCount) {
    // 마지막 슬라이더일때 까지만(colgap 20px - 양쪽 40px 추가)
    slides.style.left = `-${(currentIndex + 2) * imgWidth + 40}px`;
    // 처음 상태부터 1만큼 왼쪽에 가 있는 상태에서 시작
    slides.style.transition = `${speed}s ease-out`;
  }
  if (currentIndex === slideCount - 1) {
    // 마지막 슬라이더일때
    setTimeout(function () {
      // 위치값 처음으로 한번에 변경
      slides.style.left = `-${imgWidth}px`;
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIndex = -1;
  }
  currentIndex += 1;
}

makeClone(); // 이미지들을 복사해서 앞 뒤에 붙여 넣는 함수
initFunction(); // 초기화 해주는 함수

setInterval(next, 3000);

// section02 box scroll 이벤트
const section02 = document.querySelector("#section02");
const boxWrap = document.querySelector(".box_wrap");
const boxes = document.querySelectorAll(".box");
const box02 = document.querySelector(".box02");

let scroll = 100;
// devices 스크롤 시 움직임
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    if (scroll < 0) {
      scroll = 0;
    } else if (scroll >= 0) {
      scroll -= 10;
    }
  } else {
    if (scroll > 100) {
      scroll = 100;
    } else if (scroll < 100) {
      scroll += 10;
    }
  }

  boxes.forEach((item) => {
    item.style.transform = `translateY(${scroll}px})`;
  });
});



// section03 card scroll 이벤트
let card1 = document.querySelector(".card01"),
  card2 = document.querySelector(".card02"),
  card3 = document.querySelector(".card03");

const section03 = document.querySelector("#section03");
const section04 = document.querySelector("#section04");

window.addEventListener("scroll", () => {
  // card01
  if (scrollY < 1300) {
    card1.style.opacity = "1";
    card1.style.transform = "scale(0.8)";
  } else if (scrollY >= 1300 && scrollY < 2300) {
    card1.style.opacity = "1";
    card1.style.transform = "scale(1)";
  } else if (scrollY >= 2300 && scrollY < 3500) {
    card1.style.opacity = "1";
    card1.style.transform = "scale(0.7)";
  }
  // else card1.style.opacity = "0";

  // card02
  if (scrollY < 1900) {
    card2.style.opacity = "1";
    card2.style.transform = "scale(0.8)";
  } else if (scrollY >= 1900 && scrollY < 2900) {
    card2.style.transform = "scale(1)";
    card2.style.opacity = "1";
  } else if (scrollY >= 2900 && scrollY < 4100) {
    card2.style.opacity = "1";
    card2.style.transform = "scale(0.75)";
  }
  // else card2.style.opacity = "0";

  // card03
  if (scrollY < 2500) {
    card3.style.opacity = "1";
    card3.style.transform = "scale(0.8)";
  } else if (scrollY >= 2500 && scrollY < 3100) {
    card3.style.opacity = "1";
    card3.style.transform = "scale(1)";
  } else if (scrollY >= 3100 && scrollY < 4600) {
    card3.style.opacity = "1";
    card3.style.transform = "scale(0.8)";
  }
  // else card3.style.opacity = "0";
});
