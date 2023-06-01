document.querySelector(".discount-button").addEventListener("click",function(){
  document.querySelector(".popup-form").classList.add("active");
})
document.querySelector(".close-btn").addEventListener("click",function(){
  document.querySelector(".popup-form").classList.remove("active");
})

let incbuttons = document.getElementsByClassName('inc');
let decbuttons = document.getElementsByClassName('dec');
let bagval = document.getElementsByClassName('bagamount');
let payment = document.getElementById('total-num');
let total = 0;

for(let i = 0; i<incbuttons.length;i++){
  var button = incbuttons[i];
  button.addEventListener('click', function(event){
   let clicked = event.target;
   var input = clicked.parentElement.children[1];
   let price = clicked.parentElement.parentElement.children[0].children[1].innerText;
   var inputval = input.value;
   var newval = parseInt(inputval)+1;
   bagval[0].innerText = parseInt(bagval[0].innerText)+1;
   input.value = newval;
   total+= parseInt(price);
   payment.innerText = total+"$";
  })
}

for(let i = 0; i<decbuttons.length;i++){
  var button = decbuttons[i];
  button.addEventListener('click', function(event){
   let clicked = event.target;
   var input = clicked.parentElement.children[1];
   var inputval = input.value;
   var newval = parseInt(inputval)-1;
   bagval[0].innerText = parseInt(bagval[0].innerText)-1;
   input.value = newval;
   let price = clicked.parentElement.parentElement.children[0].children[1].innerText;
   total-= parseInt(price);
   payment.innerText = total+"$";
  })
}
