function myFunction(x) {
  x.classList.toggle("change");
}

let btn = document.querySelector('.hamburger');
let box = document.querySelectorAll('.item'), i;

btn.addEventListener('click', function () {
  for(i = 0; i < box.length; ++i){
    box[i].classList.toggle('show');
  }
}, false);

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $(".container").addClass("scrolling");
  } else {
      $(".container").removeClass("scrolling");
  }
});

var swiper = new Swiper(".mySwiper", {
  observer: true,
            observeParents: true,
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
loop: true,

direction: "vertical",

effect: 'cube',

pagination: {
  el: ".swiper-pagination",
  clickable: true,
},

navigation: {
    nextEl: 'swiper-button-next',
    prevEl: '.swiper-button-prev',
},

});

