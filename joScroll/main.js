$(document).ready(function () {

  // CONFIGURATION HERE
  var config = {
    loopAnimation: false, // animation will loop if user scrolls over the element again
    defaultTimer: 500, // delay of animation unless noted with joTimer attribute
  };


  console.log('joscroll lit');
  var $animation_elements = $('.joScroll');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewportf
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        if ($element.attr('joTimer')) {
          var timer = $element.attr("joTimer");
          setTimeout(function () {
            $element.addClass('joScrolled');
          }, timer);
        } else {
          setTimeout(function () {
            $element.addClass('joScrolled');
          }, config.defaultTimer);
        }
      } else {
        if (config.loopAnimation == "true") {
          $element.removeClass('joScrolled');
        } else {
          return null;
        }
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

});
