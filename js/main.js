const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', ()=>{
    searchInputEl.focus();
});
searchInputEl.addEventListener('focus', ()=>{
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합 검색');
})
searchInputEl.addEventListener('blur', ()=>{
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(()=>{
    if(window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index)=>{
    gsap.to(fadeEl, 1, {
        delay: (index+1)*0.7,
        opacity: 1
    });
});
// swiper
new Swiper('.notice-line .swiper',{
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper',{
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000
    },
    pagination:{
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
        clickable: true
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToogleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToogleBtn.addEventListener('click', ()=>{
    isHidePromotion=!isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove('hide');
    }
});

// floating

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size){
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, random(1.5, 2.5), {
        y:size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay:random(0, delay)
    })

}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.4, 25);

const spyEls= document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl)=>{
    new ScrollMagic.Scene({
        triggerElement: spyEl,// 보여짐 여부를 감시하는 요소를 지정
        triggerHook: .8 //viewport의 80%지점을 넘어가면 작동
    }).setClassToggle(spyEl, 'show').addTo(new ScrollMagic.Controller(

    ));
})