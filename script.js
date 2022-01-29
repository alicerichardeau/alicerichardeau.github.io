
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
  
// delete menu on click for navbar mobile
const menu = document.querySelector('.menu');
const menuToogle = document.querySelector('.menu_toogle');

function deleteMenu() {
  // if screen size is less than 700px
  if (window.innerWidth < 700) {
    menu.style.display = "none";
  }
}

function showMenu() {
  if (window.innerWidth < 700) { 
    menu.style.display = "flex";
  }
}

menuToogle.addEventListener("click", showMenu);
menu.addEventListener("click", deleteMenu);