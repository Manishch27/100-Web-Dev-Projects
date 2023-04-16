let minus = document.body.querySelectorAll("i")[0];
let plus = document.body.querySelectorAll("i")[1];
let counter = document.body.querySelector("div").innerText;
console.log(counter);



let increase = value =>{
  value++
};

minus.addEventListener("click", ()=>{
  counter--;
  document.body.querySelector("div").innerText = counter;
});

plus.addEventListener("click", ()=>{
  counter++;
  document.body.querySelector("div").innerText = counter;
});

