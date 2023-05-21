/* 변수선언 */

var banner = document.getElementById("banner"); //배너 본체
var img = banner.getElementsByTagName("img"); //풍선 스프라이트 이미지 객체
var toggle = document.getElementById("toggle"); //배너 on/off 토글 버튼 객체
var sound_btn = document.getElementById("sound_btn"); //사운드 on/off 토글버튼 객체

var banner_height = getComputedStyle(banner).height; //배너의 높이 값 변수
var cast = []; //풍선 스프라이트 객체 정의할 배열

/* 변수선언 끝*/
