var elem1 = document.querySelector("#greyButton");
var elem2 = document.querySelector("#pinkButton");
var elem3 = document.querySelector("#greenButton");
var elem4 = document.querySelector("#orangeButton");

elem1.addEventListener("click", changeElem1 );
elem2.addEventListener("click", changeElem2 );
elem3.addEventListener("click", changeElem3 );
elem4.addEventListener("click", changeElem4 );

function getColour(elem) {
  var style = getComputedStyle(elem);
  return style.backgroundColor;
}

function changeElem1(){
  document.body.style.backgroundColor = getColour(elem1);
  console.log('elem1');
}
function changeElem2(){
  document.body.style.backgroundColor = getColour(elem2);
  console.log('elem2');
}

function changeElem3(){
  document.body.style.backgroundColor = getColour(elem3);
  console.log('elem3');
}

function changeElem4(){
  document.body.style.backgroundColor = getColour(elem4);
  console.log('elem4');
}
