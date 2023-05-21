/* 변수선언 */
var banner = document.getElementById("banner"); //배너 본체
var img = banner.getElementsByTagName("img"); //풍선 스프라이트 이미지 객체
var toggle = document.getElementById("toggle"); //배너 on/off 토글 버튼 객체
var sound_btn = document.getElementById("sound_btn"); //사운드 on/off 토글버튼 객체

var banner_height = getComputedStyle(banner).height; //배너의 높이 값 변수
var cast = []; //풍선 스프라이트 객체 정의할 배열
/* 변수선언 끝*/

/* 풍선 객체 생성 */
function set_balloon(num) {
  //풍선의 속성 값을 랜덤으로 생성
  var x = Math.floor(Math.random() * (500 - 10) + 10); //10 ~ 500사이의 값
  var y = Math.floor(Math.random() * (400 - 120) + 120);
  var size = Math.floor(Math.random() * (200 - 100) + 100);
  var angle = Math.floor(Math.random() * (360 - 0) + 0);
  var speed = Math.floor(Math.random() * (2 - 0) + 0);

  //풍선 객체
  cast[num] = {
    x: x, //풍선의 x좌표
    y: -y, //풍선의 y좌표(배너 상단 밖에서 출현하므로 -값 적용)
    size: size, //풍선의 크기
    angle: angle, //풍선의 초기 회전 각도 값
    speed: speed, //풍선이 떨어지는 속도
  };
}
/* 끝 */

/* 풍선 객체 초기화 */
function ball_init() {
  for (var i = 0; i < img.length; i++) {
    set_balloon(i);
    img[i].style.left = "-9999px"; //풍선의 x좌표
    img[i].style.top = "-9999px"; //풍선의 y좌표
  }
}
/* 끝 */

/* 풍선 애니메이션 */
function animate_balloon() {
  for (var i = 0; i < img.length; i++) {
    //풍선 속성 변경
    img[i].style.left = cast[i].x + "px"; //x좌표
    img[i].style.top = cast[i].y + "px"; //y좌표
    img[i].style.transform = "rorate(" + cast[i].angle + "deg)"; //회전

    //풍선이 화면 안에 있으면
    if (cast[i].y < parseInt(banner_height)) {
      cast[i].y += 1 + cast[i].speed;
      cast[i].angle += cast[i].speed;
    } else {
      //풍선이 화면 밖으로 나가면
      set_balloon(i);
    }
  }
}
/* 끝 */

/* 배경음악 처리 */
function bgm_init() {
  var bgm = new Audio();
  bgm.src = "IMG/bgm.mp3";
  bgm.loop = true;
  document.body.appendChild(bgm);
}
/* 끝 */

/* ================================================================== */

/* 메인 */
ball_init();
setInterval(function () {
  animate_balloon();
}, 1000 / 30);
bgm_init();
/* 메인 끝 */

/* ================================================================== */

/* ================================================================== */

/* 사운드버튼 이벤트 핸들러 */
sound_btn.onclick = function () {
  var attr = sound_btn.getAttribute("class"); //사운드 버튼 class 속성
  var bgm = document.getElementsByTagName("audio"); //audio 객체

  if (attr == "active") {
    //사운드off
    sound_btn.removeAttribute("class"); //클래스 제거
    sound_btn.setAttribute("src", "IMG/sound_off.png"); //버튼 이미지 교체
    bgm[0].pause(); //bgm정지
  } else {
    //사운드 on
    sound_btn.setAttribute("class", "active");
    sound_btn.setAttribute("src", "IMG/sound_on.png");
    bgm[0].play(); //bgm재생
  }
};
/* 끝 */

/* 배너 열기/닫기 버튼 이벤트 핸들러 */
toggle.onclick = function () {
  var attr = banner.getAttribute("class"); //배너 객체 class 속성

  if (attr == "active") {
    //배너 닫기
    banner.removeAttribute("class");
    toggle.innerHTML = "배너 열기"; //버튼 text 변경
    return false;
  } else {
    //배너열기
    banner.setAttribute("class", "active");
    toggle.innerHTML = "배너 닫기";
    return false;
  }
};
/* 끝 */

/* ================================================================== */
