"use strict";

jQuery(document).ready(function ($) {

    var videoPlayButton,
        videoWrapper = document.getElementsByClassName('video-wrapper')[0],
        video = document.getElementsByTagName('video')[0],
        videoMethods = {
            renderVideoPlayButton: function () {
                if (videoWrapper.contains(video)) {
                    this.formatVideoPlayButton()
                    video.classList.add('has-media-controls-hidden')
                    videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                    videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
                }
            },

            formatVideoPlayButton: function () {
                videoWrapper.insertAdjacentHTML('beforeend', '\
            <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
            </svg>\
        ')
            },

            hideVideoPlayButton: function () {
                video.play()
                videoPlayButton.classList.add('is-hidden')
                video.classList.remove('has-media-controls-hidden')
                video.setAttribute('controls', 'controls')
            } 
        }

    videoMethods.renderVideoPlayButton()

    var figure = $(".video-resource").hover(hoverVideo, hideVideo, toggleControls);

    function hoverVideo(e) {  
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();

    }

    function toggleControls(e) {

        if (e.type === "mouseenter") {
            $('video', this).attr("controls", "");
        } else if (e.type === "mouseleave") {
            $('video', this).removeAttr("controls");
        }
    }

    $('.smooth-goto').on('click', function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 50 }, 1000);
        return false;
    });  

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();



    // scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });


    //End
});
