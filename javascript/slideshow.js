/**
 * Created by Rachel on 7/1/2015.
 */
/*
 window.setInterval(function(){

 window.setTimeout(function(){
 $('div').css('background-image','url(http://sstatic.net/stackexchange/Img/launched-ads/english.png)');
 },100);
 $('div').css('background-image','url(http://www.gravatar.com/avatar/e526fad25155097bcda4a97b26d78993?s=32&d=identicon&r=PG)');
 },3000);*/

/**
 * Created by Slade on 7/1/2015.
 */


(function () {
    "use strict";

    window.animator = {
        init: function () {
            $("body").fadeIn(2000);
        }
    }
}());

window.addEventListener("load", animator.init);