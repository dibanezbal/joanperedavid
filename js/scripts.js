
// Hamburguer menu display
function myFunction() {
    var x = document.getElementById("navbarResponsive");
    if (x.style.display === "block") {
      x.style.display = "none";
      element.classList.remove("collapse");
    } else {
      x.style.display = "block";
    }
  }




window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });


    // Random galery

    var arr = [1, 2, 3, 4, 5, 6, 7];
    function randomArrayShuffle(arr) {
        var currentIndex = arr.length, temporaryValue, randomIndex;
        while (1 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = arr[currentIndex];
          arr[currentIndex] = arr[randomIndex];
          arr[randomIndex] = temporaryValue;
        }
        return arr;
      }

      randomArrayShuffle(arr); 
      console.log(arr);


    for (var i = 1; i <= arr.length; i++) {      
        var imagePage = document.getElementById('image' + i);
        var randomimage = "assets/img/gallery/thumbnails/" + arr[i] + ".jpg";
        imagePage.src=randomimage;
        console.log(randomimage);
    }



      /* Google Forms */

      var element = document.getElementById("ff-submit-root");
      element.classList.add("rounded-pill");
    

});
