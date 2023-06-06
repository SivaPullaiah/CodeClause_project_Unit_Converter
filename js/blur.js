$(window).scroll(function() {
    if($(document).scrollTop()>50) {
        $(".header-contatiner-resume").addClass("blur-header");
        $(".linear-grad-for-char").addClass("char-linear-grad");
    }
    else {
        $(".header-contatiner-resume").removeClass("blur-header");
        $(".linear-grad-for-char").removeClass("char-linear-grad");
    }
});