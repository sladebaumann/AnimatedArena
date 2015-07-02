/**
 * Created by Slade on 7/1/2015.
 */


(function () {
    "use strict";

    window.animator = {
        init: function () {
            $(".mainPage").fadeIn(2000);
            window.setTimeout(animator.indexCounter(), 2000);
        },

        indexCounter: function () {
            $(".mainPage").click(function(){
                window.setTimeout(switchPage, 2000);
                $(".mainPage").fadeOut(2000);

                function switchPage () {
                    document.location.href = 'http://animated-arena.mipropia.com/numbers.html';
                }
            });

        }
    };

}());

window.addEventListener("load", animator.init);