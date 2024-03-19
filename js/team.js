$(document).ready(() => {
    let is_scrolling = false;
    locations = ["#title", "#core-team", "#assistants"];
    if (window.location.pathname.endsWith("team.html")) {
        window.location.hash = locations[0];
    }
    $("#team-slider-nav").on('wheel', function(e) {
        if (is_scrolling) return;
        is_scrolling = true;
        setTimeout(() => {
            is_scrolling = false;
        }, 750);
        let currentSlide = locations.indexOf(window.location.hash);
        if (e.originalEvent.deltaY > 0) {
            if (currentSlide < 2) {
                currentSlide++;
            }
        } else {
            if (currentSlide > 0) {
                currentSlide--;
            }
        }
        window.location.hash = locations[currentSlide];
    });
});