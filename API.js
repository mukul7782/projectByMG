
const URL="https://api.sampleapis.com/coffee/hot"
let button=document.querySelector('.btn1');
let getpara=document.querySelector('.P1');


// const getfacts=async()=>{

// let response= await fetch(URL);
// console.log(response);

// let data= await response.json();// json converts in array with objects
// console.log(data[0].title);
// getpara.innerText=data[0].description;
// }


// let getpara2=document.querySelector('.P2')


// const URL2="https://api.sampleapis.com/coffee/hot"

// let getfacts2=async()=>{
//    let response= await fetch(URL2);
//    console.log(response);
//    let data= await response.json();

//    console.log(data[0].title);

//    getpara2.innerText=data[0,1,2].title;

// }



                       /// by using .then approach

let getfacts=()=>{
  fetch(URL)
  .then((response)=>{
    return response.json()
  }).then((data)=>{
    console.log(data[0]);
    getpara.innerText=data[0].title
  })

}



button.addEventListener('click',getfacts);


