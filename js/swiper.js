/* index 스와이퍼 */
$(function () {
    var swiper = new Swiper(".mainSlide", {
        spaceBetween: 30,
        centeredSlides: true,
        speed : 1000,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        observer: true,
        observeParents: true,
    })
})

/* 모바일 스와이퍼 */
$(function(){
  const swiper = new Swiper(".md_recom", {
      slidesPerView: 5,
      centeredSlides: true,

  });
})

/* btn-menu 클릭시 바탕 고정 */
function openMenu(){
  const modal = document.getElementById('modal');
  modal.classList.add('s_show');
}
function closeModal(){
  const modal = document.getElementById('modal');
  modal.classList.remove('s_show');
}

/* 일화당 상단 스와이퍼 */
$(function () {
  var swiper = new Swiper(".potoSwiper", {
        loop:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },speed : 2500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  })
})

/* 일화당 내용 스와이퍼 */
$(function() {
  var swiper = new Swiper(".dofoto", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed : 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})

/* btn_menu 사이드메뉴 */
$(document).ready(function(){
 
  $('.btn_menu').on('click', function(){
        $('.menu_bg').show(); 
        $('.btn-menu').show().animate({
            right:0
        });  
    });
    $('.colse').on('click', function(){
        $('.btn-menu').animate({
            right: '-' + 100 + '%'
                    },function(){
        $('.btn-menu').hide(); 
        }); 
    });
});


/* AOS_JS */
AOS.init({
    duration: 1200,
})