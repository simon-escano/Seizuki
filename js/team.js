$(document).ready(() => {
    let is_scrolling = false;
    if (window.location.pathname.endsWith("team.html")) {
        window.location.hash = "#slide-1";
    }
    $("#team-slider").on('wheel', function(e) {
        if (is_scrolling) return;
        is_scrolling = true;
        setTimeout(() => {
            is_scrolling = false;
        }, 750);

        let currentSlide = Number(window.location.hash.charAt(window.location.hash.length - 1));
        if (currentSlide == 0) currentSlide++;
        if (e.originalEvent.deltaY > 0) {
            if (currentSlide < 3) {
                currentSlide++;
            }
        } else {
            if (currentSlide > 1) {
                currentSlide--;
            }
        }
        window.location.hash = `#slide-${currentSlide}`;
    });
});