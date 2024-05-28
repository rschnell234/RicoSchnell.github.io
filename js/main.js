const the_animation = document.querySelectorAll('.animation');

let mybutton = document.getElementById("topButton");
window.onscroll = function() {scrollFunction()};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 

const the_fadeAnimation = document.querySelectorAll('.fade-in')

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-animation')
        }
            else {
                entry.target.classList.remove('fade-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const fadeElements = the_animation[i];

    fadeObserver.observe(fadeElements);
  } 


function scrollFunction(){
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } 
      else {
        mybutton.style.display = "none";
      }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}