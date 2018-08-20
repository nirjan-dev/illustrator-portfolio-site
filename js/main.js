new Litebox();

// smooth scrolling to section

function scrollIt(element) {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': element.offsetTop
    });
  }


  document.querySelectorAll(".nav--navbar a").forEach(function(link){
    addEventListener("click",function (e) {
        e.preventDefault();
        scrollIt(document.querySelector(e.target.attributes[0].value));
     });
  });