
let slideIndex=0;
slidshow();

function slidshow(){

    let  slide = document.getElementsByClassName("slide-img");
    for(let i=0;i < slide.length;i++){

       slide[i].style.display="none";
       console.log(slide.length);
    }
    slideIndex++;
    if(slideIndex  > slide.length){
        slideIndex=1;
    }
    slide[slideIndex-1].style.display="block";
     setTimeout(slidshow, 2000);
};