var circle = document.querySelector(".circle");
var follower = document.querySelector(".follower");

TweenLite.set([circle, follower], {
  xPercent: -50,
  yPercent: -50
});

window.addEventListener("mousemove", moveCircle);

function moveCircle(e) {
  TweenLite.to(circle, 0.1, {
    x: e.clientX,
    y: e.clientY
  });
  TweenLite.to(follower, 0.6, {
    x: e.clientX,
    y: e.clientY
  });
}

window.addEventListener("scroll", function () {
  var arrow = document.querySelector(".arrow");
  arrow.classList.toggle("is-gone", window.scrollY > 100);
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
