/**
 * Created by Slade on 7/1/2015.
 */


(function () {
    "use strict";

    window.animator = {
        init: function () {
            animator.indexCounter();
        },

        indexCounter: function () {
            window.setTimeout(timerForCountdown, 5000);
            $(".mainPage").fadeOut(5000);

            function timerForCountdown()
            {
                document.location.href = 'http://animated-arena.mipropia.com/getReady.html';
            }
        }
    };

}());

window.addEventListener("load", animator.init);