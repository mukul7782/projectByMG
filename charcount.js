// let li=document.querySelectorAll('li');
// ul.addEventListener("click",function(dets){
//     console.log(dets);
//     dets.target.style.textDecoration="line-through"
// })

let span=document.querySelector('span');

let input =document.querySelector('input');

input.addEventListener("input",function(){
  console.log(input.value.length);
  span.textContent=input.value.length;
})
 