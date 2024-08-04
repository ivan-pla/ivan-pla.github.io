
var newElement = document.createElement("div");
newElement.classList.add("myObserver");
var stickyElement = document.querySelector(".sticky-bar");


insertBefore(newElement, stickyElement);
function insertBefore(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode);
}
  
var observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].intersectionRatio === 0) {
      stickyElement.classList.add("is-pinned");
    } else if (entries[0].intersectionRatio === 1) {
      stickyElement.classList.remove("is-pinned");
    }
  },
  { threshold: [0, 1] }
);

observer.observe(newElement);