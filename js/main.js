var elForm = document.querySelector(".form");
var speakName = document.querySelector(".input1");
var speakMoney = document.querySelector(".input2");
var money = 2000;

var elP = document.querySelector(".text");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (isNaN(speakMoney.value)) {
    elP.textContent = 'Son kiriting'
  } 
  else if (speakMoney.value < money) {
   elP.textContent = `Pulingiz yetmadi ${speakName.value}`
  }
  else if(speakMoney.value >= money){
    elP.textContent = ` ${speakName.value} O'tdingiz`
  }
})
