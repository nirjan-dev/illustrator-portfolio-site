new Litebox();

// smooth scrolling to section

function scrollIt(element) {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': element.offsetTop
    });
  }


  const navLinks = document.querySelectorAll(".nav--navbar a");

  navLinks.forEach(function(link){
    link.addEventListener("click",function (e) {
        e.preventDefault();
        scrollIt(document.querySelector(e.target.attributes[0].value));
     });
  });

  // navbar toggle

  const toggleButton = document.querySelector(".nav--toggle-button button");
  const navbar = document.querySelector(".nav--navbar");

  toggleButton.addEventListener('click',function(){
    toggleButton.classList.toggle('active');
  navbar.classList.toggle('show');
  });