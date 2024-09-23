let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

/* VIDEO BLOCK*/

let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title5 = document.querySelector('.main-video .title5');

listVideo.forEach(video =>{
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title5.innerHTML = text;
        }
    }
})


// new section//
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slider2').style.transform = `translateX(${offset}%)`;
}

// new//
const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('nav-bar');

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
});




