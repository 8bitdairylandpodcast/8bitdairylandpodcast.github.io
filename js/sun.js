var curve = new CurveAnimator(
  [50,300], [350,300],
  [50,100], [350,100]
);

var o = document.getElementById('mario-sun');
o.style.position = 'absolute';

curve.animate(2, function(point,angle){
  o.style.left = point.x+"px";
  o.style.top  = point.y+"px";
  o.style.transform =
    o.style.webkitTransform =
    o.style.MozTransform =
    "rotate("+angle+"deg)";
});

