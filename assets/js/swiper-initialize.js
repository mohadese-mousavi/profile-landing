const swPersonal = new Swiper('#sw-personal', {

    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

const swComments = new Swiper('#sw-comments', {

    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    
});
