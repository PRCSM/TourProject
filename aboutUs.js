
// Show content after the preloader is done
window.addEventListener("load", function() {
   const preloader = document.getElementById("preloader");
   const mainContent = document.getElementById("main-content");

   // Hide preloader after page load
   preloader.style.display = 'none';

   // Show main content
   mainContent.style.display = 'block';
});


// js for hamburger
let hamburger=document.querySelector(".hamburger");
let button=document.querySelector(".about button")
let link=document.querySelector(".pages .link");
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    link.classList.toggle("menu");
    button.classList.toggle("zindex")
})



let about = document.querySelector(".aboutUs");
let review2 = document.querySelector(".review2");
let review1 = document.querySelector(".review1");

window.onscroll = () => {
   let top = window.scrollY;

   // Animation for the "aboutUs" section
   let aboutOffset = about.offsetTop - 600;
   let aboutHeight = about.offsetHeight + 700;

   if (top >= aboutOffset && top < aboutOffset + aboutHeight) {
      about.classList.add("showanimateright");
   } else {
      about.classList.remove("showanimateright");
   }

   // Animation for the "review2" section
   let review2Offset = review2.offsetTop - 600;
   let review2Height = review2.offsetHeight + 500;

   if (top >= review2Offset && top < review2Offset + review2Height) {
      review2.classList.add("showanimateright");
   } else {
      review2.classList.remove("showanimateright");
   }

   // Animation for the "review1" section 
   let review1Offset = review1.offsetTop - 600;
   let review1Height = review1.offsetHeight +500;

   if (top >= review1Offset && top < review1Offset + review1Height) {
      review1.classList.add("showanimateleft");
   } else {
      review1.classList.remove("showanimateleft");
   }
};

