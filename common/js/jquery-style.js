var
circle = $(".circle"),
circleblack = $(".circle-black"),
circlewhite = $(".circle-white"),
circleemail = $(".circle-email"),
circlearrow = $(".circle-arrow"),
follower = $(".follower");

$(".work-item").on({
  "mouseenter": function() {
    circlearrow.addClass("is-active");
    circleblack.removeClass("is-active");
    follower.addClass("is-active");
  },
  "mouseleave": function() {
    circlearrow.removeClass("is-active");
    circleblack.addClass("is-active");
    follower.removeClass("is-active");
  }
});
$(".sub-work-fv").on({
  "mouseenter": function() {
    circlearrow.addClass("is-active");
    circleblack.removeClass("is-active");
    follower.addClass("is-active");
  },
  "mouseleave": function() {
    circlearrow.removeClass("is-active");
    circleblack.addClass("is-active");
    follower.removeClass("is-active");
  }
});
$(".contact-form").on({
  "mouseenter": function() {
    circleemail.addClass("is-active");
    circleblack.removeClass("is-active");
    follower.addClass("is-email");
  },
  "mouseleave": function() {
    circleemail.removeClass("is-active");
    circleblack.addClass("is-active");
    follower.removeClass("is-email");
  }
});
$(".overlay").on({
  "mouseenter": function() {
    circlewhite.addClass("is-active");
    circleblack.removeClass("is-active");
    follower.addClass("is-email");
  },
  "mouseleave": function() {
    circlewhite.removeClass("is-active");
    circleblack.addClass("is-active");
    follower.removeClass("is-email");
  }
});

$(window).scroll(function(){
     var scroll = $(this).scrollTop(); // スクロール値を取得
     $('.work-background').css('background-position', '0px ' + parseInt( scroll / 10 ) + 'px'); // 1/50のスピード
     // $('.work-background').css('background-position-x', parseInt( scroll / -5 ) + 'px'); // 1/50のスピード
 });
