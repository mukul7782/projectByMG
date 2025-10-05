let span=document.querySelector('span');

let input =document.querySelector('input');

input.addEventListener("input",function(){
  console.log(input.value.length);
  let left=20-input.value.length;

  if(left<0){
     span.textContent=left;
     span.style.color="red";
  }else{
  span.textContent=left;
     span.style.color="black";
  }
});
 