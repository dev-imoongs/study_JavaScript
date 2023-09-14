const spans = document.querySelectorAll("span");
const contents = document.querySelectorAll(".content");
const firstTop = contents[0].offsetTop;
const secondTop = contents[1].offsetTop;
const thirdTop = contents[2].offsetTop;

spans[0].onclick = function () {
  
  window.scroll({ top: firstTop, behavior: "smooth" });
  $('.content2').hide()
  $('.content3').hide()
};

spans[1].onclick = function () {
  $('.content2').show()
  window.scroll({ top: secondTop, behavior: "smooth" });
  $('.content1').hide()
  $('.content3').hide()
};

spans[2].onclick = function () {
  $('.content3').show()
  window.scroll({ top: thirdTop, behavior: "smooth" });
  $('.content1').hide()
  $('.content2').hide()
};
