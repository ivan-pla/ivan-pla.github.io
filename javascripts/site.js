const stickyElements = document.querySelectorAll('.sticky-bar');

const onScroll = () => {
  stickyElements.forEach((sticky) => {
    if (sticky) {
    const elementCSSTop = parseInt(window.getComputedStyle(sticky, null).getPropertyValue('top'));
    sticky.classList.toggle('is-pinned', sticky.getBoundingClientRect().top == elementCSSTop);
    }
  });
};

window.addEventListener('scroll', onScroll);