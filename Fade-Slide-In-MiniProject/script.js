//Selecting all the items
const items = document.querySelectorAll('.item:not(:first-child)');

//When 50% of the viewport is displayed, display the items and effect
const options = {
  threshold: 0.5
}

//function to make items slide in
function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}
//Creating observer for items
const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item);
})

