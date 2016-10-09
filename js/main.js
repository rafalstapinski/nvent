$(document).ready(function () {

  //$('#weCanDoIt').hide();
  //$('#hitPortfolio').hide();
  //WINDOW SCROLLING STUFF HERE

  // set variables here
  var scrollPos = $(window).scrollTop();

  //Get position of scroll
  var getScrollPos = function () {
    scrollPos = $(window).scrollTop();
    return scrollPos;
  };

  // do stuff when scrolling
  var ifScrolling = function (pos) {
    if (pos === 0) {
      $(".menu_wrap").css("background-color", "transparent");
    } else {
      $(".menu_wrap").css("background-color", "#FFFFFF");
    }
  };

  // On load and scroll:
  ifScrolling(getScrollPos());
  $(window).scroll(function () {
    ifScrolling(getScrollPos());
  });


  // find ID of this shit
  $(function () {
    var smoothScroll = function (el) {
      var anchor = el.attr('id');
      console.log(anchor);
      var anchorLink = anchor.split("_");
      var targetId = anchorLink[1];
      console.log(targetId);
      var target = document.getElementById(targetId);
      console.log(target);
      var targetPos = target.offsetTop;

      console.log(targetPos);
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 600);
    };

    $("#menu_list > li").click(function () {
      var elem = $(this);
      console.log(elem);
      smoothScroll(elem);
    });

    $(".logo > a").click(function () {
      var elem = $(this);
      smoothScroll(elem);
    });

    $(".button, .link_button, .link").click(function () {
      var elem = $(this);
      console.log(elem);
      smoothScroll(elem);
    });
  });

});
