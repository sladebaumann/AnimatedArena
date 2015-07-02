/**
 * Created by Slade on 7/2/2015.
 */

(function () {
    "use strict";

    window.animator = {
        init: function () {
            $(".mainPage").fadeIn(10000);
            animator.getReadyTimer();
        },

        getReadyTimer: function () {

            var count = 10;

            var counter = setInterval(timerForCountdown, 1000); //1000 will  run it every 1 second

            function timerForCountdown() {
                count = count - 1;
                if (count <= 0) {
                    document.location.href = 'http://animated-arena.mipropia.com/slideshow.html';
                    clearInterval(counter);
                    return;
                }

                document.getElementById("numbers").innerHTML = count; // watch for spelling
            }
        }
    };
}());

window.addEventListener("load", animator.init);