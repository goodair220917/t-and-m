var sections = document.querySelectorAll('section');
var options = {
rootMargin: '0px',
threshold: 0.25
}
var callback = (entries) => {
entries.forEach((entry) => {
var target = entry.target;
if (entry.intersectionRatio >= 0.25) {
target.classList.add("is-inview");
} else {
target.classList.remove("is-inview");
}
})
}
var observer = new IntersectionObserver(callback, options)
sections.forEach((section, index) => {
observer.observe(section)
})