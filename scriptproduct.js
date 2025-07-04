let plus= document.getElementById("plus");
console.log(plus);
let minus=document.getElementById("minus");
let count=document.getElementById("count");
let number =1;
console.log("script");
plus.addEventListener("click",function(){
   number++;
   count.innerHTML=number;
});

minus.addEventListener("click",function(){
   
    if(number>1){
    number--;
    }
    count.innerHTML=number;
});



