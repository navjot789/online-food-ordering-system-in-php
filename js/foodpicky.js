/*!
 * Foodpicky HTML template V 1.0
 * A simple and easy to use HTML template designed for online food ordering.
 * http://codenpixel.com
 * Author : codenpixel (http://codenpixel.com/)
 */

/* 
*  Table of content 
*************************************
*   Loading animation seetings
*   Adding images via data atr
*   Range slider.Pricing slider
*   Headroom (hide - show menu on scrool)
*   Isotope 
*   
**/

$(document).ready(function() {
    "use strict";

    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 300,
        outDuration: 300,
        linkElement: '.animsition-link', // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        unSupportCss: ['animation-duration', '-webkit-animation-duration', '-o-animation-duration'], //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body'
    });
   
     $(".bg-image").css("background",function(){var a="url("+$(this).data("image-src")+") no-repeat center center";return a}),$(".bg-image").css("background-size","cover"),
        
    /// Range slider   
    $("#ex2").slider({});
    $("#ex2").on("slide", function(slideEvt) {
        $("#ex2SliderVal").text(slideEvt.value);
    });

    // grab an element
    var myElement = document.querySelector('#header');
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement, {
        // vertical offset in px before element is first unpinned
        offset: 80, // scroll tolerance in px before state changes
        tolerance: 40, // if you need other CSS classes, to apply these options.
        classes: {
            initial: "animated",
            pinned: "fadeInDown",
            unpinned: "fadeOutUp"
        }
    });
    // initialise
    headroom.init();
    
    
    // initialise
    headroom.init();
    ////////Packages filter
    var $container = $(".restaurant-listing");
    $container.isotope({
        filter: "*",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
        }
    });

    /////// Isotope 
    $("nav.primary ul a").click(function() {
        var selector = $(this).attr("data-filter");
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false,
            }
        });
        return false;
    });
    var $optionSets = $("nav.primary ul"),
        $optionLinks = $optionSets.find("a");
    $optionLinks.click(function() {
        //alert( $optionLinks);
        var $this = $(this);
        // don"t proceed if already selected
        if ($this.hasClass("selected")) {
            return false;
        }
        var $optionSet = $this.parents("nav.primary ul");
        $optionSet.find(".selected").removeClass("selected");
        $this.addClass("selected");
     
        
       
    });


    
    //// Range slider seetings
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
            //$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            $(".minvalue").html("$" + ui.values[0]);
            $(".maxvalue").html("$" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

    ////// Increment and decrement select box
    $(".up").on("click", function() {
        var thisObj = $(this);
        var thisInput = thisObj.parent().find("input");
        var prevVal = parseInt(thisInput.val());
        var newVal = prevVal + 1;
        thisInput.val(newVal);
    });
    $(".down").on("click", function() {
        var thisObj = $(this);
        var thisInput = thisObj.parent().find("input");
        var prevVal = parseInt(thisInput.val());
        var newVal = prevVal - 1;
        if (newVal >= 0) {
            thisInput.val(newVal);
        }
    });
    
   
         
});


