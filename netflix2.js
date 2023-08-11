// Get all the accordion items
var accordionItems = document.querySelectorAll('.accordion-item');

// Add click event listener to each accordion header
accordionItems.forEach(function(item) {
  item.querySelector('.accordion-header').addEventListener('click', function() {
    // Toggle the active class on the accordion item
    item.classList.toggle('active');
  });
});



