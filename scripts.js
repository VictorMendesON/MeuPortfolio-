const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a');



let header = document.getElementById('header')

function createSwiper(container, pagination, nextButton, prevButton) {
    return new Swiper(container, {
      slidesPerView: handleWidth(),
      spaceBetween: 30,
      pagination: {
        el: pagination,
        clickable: true,
      },
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
    });
}

function handleWidth() {
    let getWidth = window.innerWidth || document.documentElement.clientWidth;
    let slideShow = 3;
  
    if (getWidth < 1001) {
      slideShow = 2;
    }
  
    if (getWidth < 700) {
      slideShow = 1;
    }
  
    return slideShow
}

menuHamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  
  links.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.toggle('active');
    })
  })
  


    window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        header.style.background = '#191919'
    } else {
        header.style.background = 'transparent'
    }
})

// document.addEventListener('DOMContentLoaded', function() {
//   const navbarLinks = document.querySelectorAll('.navbar-links a');

//   navbarLinks.forEach(function(link) {
//       link.addEventListener('click', function(e) {
//           e.preventDefault(); // Impede o comportamento padrão de âncoras
          
//           const targetId = link.getAttribute('href').substring(1); // Remove o caractere '#' do href
//           const targetElement = document.getElementById(targetId);

//           if (targetElement) {
//               targetElement.scrollIntoView({ behavior: 'smooth' });
//           }
//       });
//   });
// });

