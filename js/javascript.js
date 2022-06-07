var state = false;
function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("password").style.color = 'white';
        state = false;
    }
    else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("password").style.color = 'white';
        state = true;
    }
}
// bootstrap v5.0.0 @beta3
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000,                                            //Chỉnh thời gian chuyển slide
    wrap: false
})