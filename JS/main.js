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

ball_init();
/* 끝 */
