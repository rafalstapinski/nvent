$(document).ready(function () {

  // CONFIGURATION HERE
  var joView = {
    target: "slider_pic", // target div to store content
    leftClick: "scrollLeft",
    rightClick: "scrollRight",
    pathToJoView: "./joView/viewContent",
    defaultTimer: 500, // delay of animation unless noted with joTimer attribute
  };

  var viewContent = [
    "slider_intro",
    1,
    2,
    "slider_example",
  ];

  var viewChecker = function (view) {
    if (typeof viewContent[view] === "number") {
      return false;
    } else if (typeof viewContent[view] === "string") {
      return true;
    } else {
      console.log("broken lel");
    }
  };

  var index = 0;

  var repeater = function (i) {
    if (i >= total) {
      index = 0;
      return index;
    } else if (i < 0) {
      index = total - 1;
      return index;
    } else {
      return index;
    }
  };

  var determinator = function () {
    repeater(index);
    if (viewChecker(index)) {
      cont = path + "/views.html #" + viewContent[index];
      type = "element";
      return [type, cont];
    } else {
      cont = path + "/" + viewContent[index] + ".png";
      type = "image";
      return [type, cont];
    }
  };

  var slideLeft = function (result) {
    // takes ./joView/viewContent/ XYZ as param
    $(replace).animate({
      marginLeft: '-=938px'
    }, 350);
    var elem = 1;
  };
  var slideRight = function (result) {
    // takes ./joView/viewContent/ XYZ as param
    $(replace).animate({
      marginLeft: '0px'
    }, 350);
  };

  var switchOut = function (result) {
    $(replace).fadeOut("slow", function () {
      $(replaceDiv).hide();
      $(replaceDiv).innerHTML = "";
      console.log("switchout result: " + result[0]);
      if (result[0] == "element") {
        var loadedUrl = String(result[1]);
        console.log(loadedUrl);
        var loadedCont = $(replaceDiv).load(loadedUrl);
        console.log("loaded cont = " + $(loadedCont));
        replaceDiv.innerHTML = loadedCont;
        $(replaceDiv.childNodes).hide();
        //$(replaceDiv).show();
        //$(replaceDiv.childNodes).fadeIn("slow");

        console.log(replace + " " + "after fadeIn");
      } else if (result[0] == "image") {
        var imageReplace = "<div class='replaceCont'><img src='" + result[1] + "' /></div>";
        console.log(result[1]);
        console.log(imageReplace);
        replaceDiv.innerHTML = imageReplace;
        $(replaceDiv).fadeIn("slow");
      }
    });
  };

  var total = viewContent.length;
  var replaceDiv = document.getElementById(joView.target);
  var replace = replaceDiv.childNodes;
  var left = document.getElementById(joView.leftClick);
  var right = document.getElementById(joView.rightClick);
  var path = joView.pathToJoView;
  var cont = "";
  var type = "";


  left.addEventListener('click', function () {
    index--;
    switchOut(determinator());
    console.log(index);
  });

  right.addEventListener('click', function () {
    index++;
    switchOut(determinator());
    console.log(index);
  });





});
