
// animation css - reveal elements
// ###############################

// define options
const ratio = .4
const options = {
  
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

// add class reveal-visible when ratio is good
const handleIntersect = function (entries, observer) {

  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {

      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

// loop foreach element who have reveal class css
  const observer = new IntersectionObserver(handleIntersect, options) 
  document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r)
  })

  // #################################################################

// burger menu to cross on click
// ##############################

let link = document.getElementById('link');
let burger = document.getElementById('burger');
let ul = document.querySelector('.menu');
let body = document.querySelector('body');

// open navbar
function openNav() {

  burger.classList.add('open');
  ul.style.display = "flex";
  ul.classList.add('load');
};

// close navbar
function closeNav() {

  ul.style.display = "none";
  burger.classList.remove("open");
  ul.classList.remove('load');
};

// open or close menu on click
function showMenu() {

  link.addEventListener('click', function () {
  
      // if menu is openned
      if(burger.classList.contains('open')) {
  
        closeNav();
      }
      // if menu is closed
      else {
        
        openNav();
      }
    });
  } 
  
  showMenu();
  
// close menu on click anywhere
window.addEventListener('mouseup', function(event) {

  if(event.target != ul) {

    ul.style.display = 'none';
    burger.classList.remove("open");
  }
})

// ########################################################################


//animation for title show letter by letter
// ######################################## 
const htmlP = document.getElementById("hello");
const txt = htmlP.dataset.label;

let i 	= 0 ;
function showLetters()  {

  let timeOut ;
  if(i < txt.length) {

	  htmlP.innerHTML += `<span>${txt[i]}</span>` ;
	  timeOut = setTimeout(showLetters, 100)
	  i++
	}

	else {

	  clearTimeout(timeOut);
	}
}

showLetters();

// ##############################################################

// change navbar on scroll
// ########################

window.onscroll = function() {

  if(document.documentElement.scrollTop > 80) {

    document.querySelector('nav').style.background = "white";
    document.querySelector('nav').style.height = "53px";
    document.querySelector('nav').style.boxShadow = "0 10px 35px 0 rgb(0 0 0 / 18%)";
  }
  else {

    document.querySelector('nav').style.background = "rgba(255, 255, 255, 0.479)";
    document.querySelector('nav').style.height = "67px";
  }
}
