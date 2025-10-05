// let obj={
//   age:"14",
//   name:'mukul',
//   class:'B'

// };
// let u1=Symbol("age");
// obj[u1]="15"


// let bbj={
//    name:"helo",

// };
// let a=bbj;
// a.name="hello";



// let abd=(v1)=>{
//   console.log(`${v1} is my dance partner`);
// }
// abd('MOLA');

// let bcd=(v1,v2)=>{
//   console.log(v1+v2);
// }
// bcd(5,'2')


// let func=(...val)=>{
//   let i=0;
//   while(i<val.length){
//   console.log(val[i]);
//   i++;
//   }
// }
// func(1,2,3,4,5,6)


// function kid(val){
//   val();
// }
// kid(function kid1(){
//   console.log('hey there');
// })

// let arr=[1,2,3,4,5];
// let sr=arr.sort(func=(a,b)=>{
//  return  b-a;
// })


// let array=[1,2,3,4,5];

// array.forEach(function(val){
//       console.log(val+5);
// });

// let array1=[1,2,3,4,5];

// let newarr=array1.map(function(val){
//   return 12;
// })


// let array2=[1,2,3,4,5];

// let newarr2=array2.map(function(val){
//   return 13;
// })


// let ans=[1,2,3,4,5,6];

// let reducedarr=ans.reduce(function(accumulator,val){
// return accumulator+val;
// },0);

// let arr9=[1,2,3,4,5,6];

// let array9=arr9.filter(function(val){
//   if(val>2){
//     return true;
//   }else{
//     return false;
//   }
// })


// let arr10=[1,2,3,4,5,6];

// let copyarr10=[...arr10];
// copyarr10.pop();
// // ... operator copies all the values of different array in newarray without refernce 
// // so any changes in newarray will not cause any change i prev aray


// const user={
//   name:"user1",
//   addresss:{
//     city:'alwar',
//     location:{
//      lat:88,
//      long:89
//     }
//   }

  
//   }


// let h1=document.querySelector("h1");


// document.addEventListener("dblclick",function(){
//    h1.style.color="red";
// });
// //document.removeEventListener("dblclick",function)

// let input=document.querySelector("input");

// input.addEventListener("input",function(dets){
//   if(dets.data!==null){
//   console.log(dets.data);
// }
// }
// )

// let h3=document.querySelector('h3');
// let select=document.querySelector('select');
// select.addEventListener("change",function(dets){
//   console.log(dets.target.value);
// h3.innerHTML=`${dets.target.value} device selected`;
// })

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function (dets) {
//   console.log(dets.key); // shows which key was pressed

//   if (dets.key === " ") {  // spacebar
//     h1.textContent = "SPC";
//   }else{
//     h1.textContent ;
//   }
// });


// let inp1=document.querySelector("#inp1");


// let B1=document.querySelector("#B1");

// B1.addEventListener("click",function(){
//   inp1.click();
// })


// inp1.addEventListener('change',function(dets){
//   console.log(dets.target.files[0].name);
//   let file=dets.target.files[0].name;
//   if(file){
//      B1.innerHTML=file;
//   }
// })

let form=document.querySelector("form");

let inputs=document.querySelectorAll('input')

let main=document.querySelector('#main');


form.addEventListener("submit",function(dets){
  dets.preventDefault () 
   console.log(inputs);

let card= document.createElement("div");
card.classList.add("card");


let profile=document.createElement("div");
profile.classList.add("profile");

let img= document.createElement("img");
img.setAttribute("src",inputs[0].value)
let h3=document.createElement("h3")
h3.textContent=inputs[1].value;
let h5= document.createElement("h5");
h5.textContent=inputs[2].value;
let p= document.createElement("p");
p.textContent=inputs[3].value;

profile.appendChild(img);
card.appendChild(profile);


card.appendChild(h3);
card.appendChild(h5);
card.appendChild(p);

main.appendChild(card)

inputs.forEach(function(inps){
  if(inps.type!=="submit"){
  inps.value=""
  }
})

});
