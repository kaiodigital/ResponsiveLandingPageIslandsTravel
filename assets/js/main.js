/*==================== SHOW MENU ====================*/
const showMenu = (toggle, nav) =>{
    const navToggle = document.querySelector('.nav__toggle')
    const navMenu = document.querySelector('.nav__menu')

    // Validate that variables exist
    if(toggle && nav){
        navToggle.addEventListener('click', () =>{
            // We add the show-menu class to the div tag with the nav__menu class
            navMenu.classList.toggle('show-menu')
            console.log('show')
        })
    }
}

showMenu('.nav__toggle','.nav__menu')

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})


/*==================== POPUP ====================*/
// const btnOpenVideo = document.querySelectorAll('.islands__video-content')
// const islandsPopup = document.querySelector('#popup')

// function poPup(){
//     islandsPopup.classList.add('show-popup')
// }
// btnOpenVideo.forEach(b => b.addEventListener('click', poPup))

// const btnCloseVideo = document.querySelector('#popup-close')

// btnCloseVideo.addEventListener('click', ()=> {
//     islandsPopup.classList.remove('show-popup')
// })

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll('.controls__img')

function scrollAnimation(){
    gsap.from('.islands__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.islands__title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.islands__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.islands__button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.islands__video-content', {opacity: 0, duration: .6, delay: .6, y: -20})

    // islandsPopup.classList.remove('show-popup')
}

controlImg.forEach(c => c.addEventListener('click', scrollAnimation))