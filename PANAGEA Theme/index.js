//top scroll up
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  scrollToTopBtn.addEventListener("click", scrollToTop);


// navbar scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const logoImage = document.querySelector('.logo-image');
    const navLinks = document.querySelectorAll('.nav-link');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        logoImage.src = 'images/navbar-logo-2.svg';
        logoImage.style.opacity = '1';
        navLinks.forEach(link => {
            link.style.color = '#000';
        });
    } else {
        navbar.classList.remove('scrolled');
        logoImage.src = 'images/navbar-logo-1.svg';
        logoImage.style.opacity = '1';
        navLinks.forEach(link => {
            link.style.color = ''; // Reset to default or your preferred link color
        });
    }
});

document.querySelector('.color-switcher-btn').onclick = () =>{
  document.querySelector('.color-switcher').classList.toggle('active');
}
let theme_buttons = document.querySelectorAll('.theme-buttons');
theme_buttons.forEach(color =>{
  color.addEventListener('click',()=>{
      let dataColor = color.getAttribute('data-color');
      document.querySelector(':root').style.setProperty('--btn-color',dataColor)
  })
})

  