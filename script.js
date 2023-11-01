let trushbtns = document.getElementsByClassName("fa-trash-can");
let plusbtns = document.getElementsByClassName("fa-circle-plus");
let minusbtns = document.getElementsByClassName("fa-circle-minus");
let heartbtn = document.getElementsByClassName("fa-heart");
function total() {
  let price = document.getElementsByClassName("priceunit");
  let qte = document.getElementsByClassName("quantité");
  let total = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum = sum + price[i].innerHTML * qte[i].innerHTML;
  }
  total.innerHTML = sum;
}
for (let plusbtn of plusbtns) {
  plusbtn.addEventListener("click", function () {
    plusbtn.nextElementSibling.innerHTML++;
    total();
  });
}

for (let minusbtn of minusbtns) {
  minusbtn.addEventListener("click", function () {
    if (minusbtn.previousElementSibling.innerHTML > 0) {
      minusbtn.previousElementSibling.innerHTML--;
      total();
    }
  });
}
for (const btn of trushbtns) {
  btn.addEventListener("click", function () {
    btn.parentElement.remove();
    total();
  });
}
for (const btn of heartbtn) {
  btn.addEventListener("click", function () {
    // console.log(btn.style.color);
    btn.classList.toggle("toggleheart");
  });
}
