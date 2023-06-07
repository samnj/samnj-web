const navList = document.querySelector(".nav-list")
const navLinks = [...navList.querySelectorAll("li")]
const intersections = [...document.querySelectorAll(".intersection")]

const options = {
  threshold: 0.5,
}

const handleHighlight = (dataName) => {
  navLinks.forEach((link) => {
    link.innerText.toLowerCase() === dataName
      ? link.classList.add("text-highlight")
      : link.classList.remove("text-highlight")
  })
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      handleHighlight(entry.target.id)
    }
  })
}, options)

intersections.forEach((intersection) => {
  observer.observe(intersection)
})
