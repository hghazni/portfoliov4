var fullscreen = $('.fullscreen');
var item = $('.work-gallery__item');
var wrapper = $('.work-gallery__item-wrapper');



$( document ).ready(function() {
    wrapper.click(function(e){
        elem = event.target;
        // console.log(e);
        console.log(elem);

        $(elem).closest('.work-gallery__item').toggleClass('fullscreen');

    });
});