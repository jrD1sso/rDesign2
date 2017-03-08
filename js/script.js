/*global $, jQuery, alert*/
$(function () {
    'use strict';
    
    $("a").addClass("hvr-pop");
    
    // Nice Scroll
    $("html").niceScroll({
        cursorwidth: "10px",
        cursorborder: "none"
    });
    
    $(".carousel").carousel({interval: 6000});
    
    // colorOpt appear when colorGear is clicked 
    $(".colorGear").click(function () {
        $(".colorOpt").toggle('slow');
    });
    
    // Change Theme Color on Click
    var $liColor = $(".colorOpt ul li");
    $liColor.eq(0).css("backgroundColor", "#e41b17").end()
                        .eq(1).css("backgroundColor", "#ff8e15").end()
                        .eq(2).css("backgroundColor", "#89ff0c").end()
                        .eq(3).css("backgroundColor", "#15ddff").end()
                        .eq(4).css("backgroundColor", "#f660ff");
    
    $liColor.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
    // Scroll Up
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            $("#scrollUp").show('slow');
        } else {
            $("#scrollUp").hide('slow');
        }
    });

    $("#scrollUp").click(function () {
        $("html,body").animate({scrollTop: 0}, 800);
    });
    
});

// Loading ...
$(window).on("load", function () {
    'use strict';
    $(".loadingOverlay .sk-cube-grid").fadeOut(1000, function () {
        $("body").css("overflow", "auto"); //showing scroll
        $(this).parent().fadeOut('slow', function () {
            $(this).remove();
        });
    });
});