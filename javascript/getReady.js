/**
 * Created by Slade on 7/1/2015.
 */


(function () {
    "use strict";

    window.animator = {
        init: function () {
            $(".mainPage").fadeIn(5000);
            window.setTimeout(animator.indexCounter(), 5000);
        },

        indexCounter: function () {
            $(".mainPage").click(function(){
                document.location.href = 'http://animated-arena.mipropia.com/numbers.html';
            });

        }
    };

}());

window.addEventListener("load", animator.init);