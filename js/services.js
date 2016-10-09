$(document).ready(function () {

  // load menu, footer, and remove links necessary
  $("#link_services > a").removeAttr("href");

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
  });
});
