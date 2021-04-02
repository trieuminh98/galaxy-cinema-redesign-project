var slidesIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slidesArr = document.getElementsByClassName('slidesArr');
    var dotsArr = document.getElementsByClassName('dot');
    for (i = 0; i < slidesArr.length; i++) {
        slidesArr[i].style.display = 'none';
    }
    for (i = 0; i < dotsArr.length; i++) {
        dotsArr[i].className = dotsArr[i].className.replace(' active', '');
    }
    if (slidesIndex === slidesArr.length) {
        slidesIndex = 0
    };
    slidesIndex++;
    slidesArr[slidesIndex - 1].style.display = 'block';
    dotsArr[slidesIndex - 1].className += ' active';
    setTimeout(showSlides, 2000);
}