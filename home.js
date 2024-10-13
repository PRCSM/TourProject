

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

let link=document.querySelector(".pages .link");
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    link.classList.toggle("menu");
})

const cardData = document.querySelectorAll('.card_data');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollPercentage = (scrollPosition / windowHeight) * 100;
for(var i=0;i<=3;i++){
  if (scrollPercentage >= 50) {
    cardData[i].classList.add('show');
  } else {
    cardData[i].classList.remove('show');
  }
}
});


let about = document.querySelector(".aboutUs");
let review2 = document.querySelectorAll(".review2");
let review1 = document.querySelectorAll(".review1");


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
   review2.forEach(rev2 => {
  
   let review2Offset = rev2.offsetTop - 600;
   let review2Height = rev2.offsetHeight + 650;

   if (top >= review2Offset && top < review2Offset + review2Height) {
      rev2.classList.add("showanimateright");
   } else {
      rev2.classList.remove("showanimateright");
   }
});
   


   // Animation for the "review1" section 
  review1.forEach(rev1 => {
    let review1Offset = rev1.offsetTop - 600;
   let review1Height = rev1.offsetHeight + 650;

   if (top >= review1Offset && top < review1Offset + review1Height) {
      rev1.classList.add("showanimateleft");
   } else {
      rev1.classList.remove("showanimateleft");
   }
  });

};