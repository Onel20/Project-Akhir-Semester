document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".image");
    let currentSlideIndex = 0;

    function showSlide(index){
        slides[currentSlideIndex].style.display = "none";
        currentSlideIndex = (index + slides.length) % slides.length;
        slides[currentSlideIndex].style.display = "block"
    }

    function nextSlide () {
        showSlide(currentSlideIndex + 1); 
    }
    function beforeSlide(){
        showSlide(currentSlideIndex - 1)
    }
    showSlide(currentSlideIndex);
    document.querySelector("#minus").addEventListener('click', () =>{
        beforeSlide();
    })
    document.querySelector("#plus").addEventListener('click', () =>{
        nextSlide();
    })
    setInterval(nextSlide,4000);
    document.querySelector("div.slideshow").addEventListener('mouseenter', () => {
        document.getElementById("minus").style.opacity = "1";
        document.getElementById("plus").style.opacity = "1";
    })
    document.querySelector("div.slideshow").addEventListener('mouseleave', () => {
        document.getElementById("minus").style.opacity = "0";
        document.getElementById("plus").style.opacity = "0";
    })

    // SLIDE2

    const slides2 = document.querySelectorAll(".image2");
    let currentSlideIndex2 = 0;

    function showSlide2(index){
        slides2[currentSlideIndex2].style.display = "none";
        currentSlideIndex2 = (index + slides2.length) % slides2.length;
        slides2[currentSlideIndex2].style.display = "block"
    }

    function nextSlide2 () {
        showSlide2(currentSlideIndex2 + 1); 
    }
    function beforeSlide2(){
        showSlide2(currentSlideIndex2 - 1)
    }
    showSlide(currentSlideIndex2);
    document.querySelector("#minus2").addEventListener('click', () =>{
        beforeSlide2();
    })
    document.querySelector("#plus2").addEventListener('click', () =>{
        nextSlide2();
    })
    setInterval(nextSlide2,3000);
    document.querySelector("div.slideshow2").addEventListener('mouseenter', () => {
        document.getElementById("minus2").style.opacity = "1";
        document.getElementById("plus2").style.opacity = "1";
    })
    document.querySelector("div.slideshow2").addEventListener('mouseleave', () => {
        document.getElementById("minus2").style.opacity = "0";
        document.getElementById("plus2").style.opacity = "0";
    })

    // SHOW

    document.getElementById("button1").addEventListener('click', () => {
        document.getElementById("img1").style.display = "block";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "none";
        document.getElementById("button1").style.textDecoration = "underline";
        document.getElementById("button2").style.textDecoration = "none";
        document.getElementById("button3").style.textDecoration = "none";
    })

    document.getElementById("button2").addEventListener('click', () => {
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "block";
        document.getElementById("img3").style.display = "none";
        document.getElementById("button2").style.textDecoration = "underline";
        document.getElementById("button1").style.textDecoration = "none";
        document.getElementById("button3").style.textDecoration = "none";
    })

    document.getElementById("button3").addEventListener('click', () => {
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "block";
        document.getElementById("button3").style.textDecoration = "underline";
        document.getElementById("button2").style.textDecoration = "none";
        document.getElementById("button1").style.textDecoration = "none";
    })

})
