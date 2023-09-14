// script-file.html

function change(object){
  /* 오류 찾을때 console.log(object.src) */
   
   object.src = object.src.includes("icon5.png") ? "icon4.png" : "icon5.png";
}