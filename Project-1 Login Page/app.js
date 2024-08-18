// Event listeners for input and textarea elements
document.querySelectorAll('.form input, .form textarea').forEach(function (element) {
  element.addEventListener('keyup', function (e) {
      handleEvent(e, this);
  });

  element.addEventListener('blur', function (e) {
      handleEvent(e, this);
  });

  element.addEventListener('focus', function (e) {
      handleEvent(e, this);
  });
});

function handleEvent(e, element) {
  var label = element.previousElementSibling;

  if (e.type === 'keyup') {
      if (element.value === '') {
          label.classList.remove('active', 'highlight');
      } else {
          label.classList.add('active', 'highlight');
      }
  } else if (e.type === 'blur') {
      if (element.value === '') {
          label.classList.remove('active', 'highlight');
      } else {
          label.classList.remove('highlight');
      }
  } else if (e.type === 'focus') {
      if (element.value === '') {
          label.classList.remove('highlight');
      } else if (element.value !== '') {
          label.classList.add('highlight');
      }
  }
}

// Event listener for tab clicks
document.querySelectorAll('.tab a').forEach(function (element) {
  element.addEventListener('click', function (e) {
      e.preventDefault();

      var parent = this.parentElement;
      parent.classList.add('active');
      Array.from(parent.parentElement.children).forEach(function (sibling) {
          if (sibling !== parent) {
              sibling.classList.remove('active');
          }
      });

      var target = document.querySelector(this.getAttribute('href'));
      Array.from(target.parentElement.children).forEach(function (child) {
          if (child !== target) {
              child.style.display = 'none';
          }
      });

      target.style.display = 'block';
      target.style.opacity = 0;
      var fadeEffect = setInterval(function () {
          if (!target.style.opacity) {
              target.style.opacity = 0;
          }
          if (target.style.opacity < 1) {
              target.style.opacity = parseFloat(target.style.opacity) + 0.1;
          } else {
              clearInterval(fadeEffect);
          }
      }, 60);
  });
});
