

 function tocel(f) {
    return (f-32) * (5/9) ;
 }

 function tofah(c) {
    return c * (9/5) + 32 ;
 }

 

let button = document.getElementById("btn")
let button2 = document.getElementById("btn2")

     button2.addEventListener("click",()=>{
         let c = document.getElementById("temp").value;
          let fah = tofah(c)
          let box = document.getElementById("ans")
          box.innerHTML = "The answer is : " + fah  + " fahrenhite" + " thank you !! 🥳🥳🥳" ;
        
     })


   button.addEventListener("click",()=>{
    let f = document.getElementById("temp").value;
    
     let cel = tocel(f);
    let box = document.getElementById("ans")
    box.innerHTML = "The answer is : " + cel  + " celsius" + " thank you !! 🥳🥳🥳" ;
  })
   
   
