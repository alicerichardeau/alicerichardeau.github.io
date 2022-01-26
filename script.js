
// const images = document.querySelectorAll(".reveal")

// let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: .1
// }

// function handLeIntersect(entries){
//     console.log(entries);

//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             entry.target.style.opacity = 1;
//         }
//     })
// }

// const observer = new IntersectionObserver(handLeIntersect, options)

// images.forEach(images => {
//     observer.observe(images)
// })

const threshold = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove('reveal')
      observer.unobserve(entry.target)
    }
  })
}

document.documentElement.classList.add('reveal-loaded')

window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(handleIntersect, options)
  const targets = document.querySelectorAll('.reveal')
  targets.forEach(function (target) {
    observer.observe(target)
  })
})