(function(d) {
  var mouseX = 0;
  var mouseY = 0;
  var isShiftClickOnce = false;
  var SHIFT_THRESHOLD_MS = 500;

  d.addEventListener('mousemove', function(e) { mouseX = e.x; mouseY = e.y; });
  d.body.addEventListener('keydown', function(e) {
    if (e.keyCode === 16) {
      if (d.isShiftClickOnce) {
        e.preventDefault();

        delete d.isShiftClickOnce;
        el = d.elementFromPoint(mouseX, mouseY);
        el.parentElement.removeChild(el);
      } else {
        d.isShiftClickOnce = true;

        window.setTimeout(function() {
          delete d.isShiftClickOnce;
        }, SHIFT_THRESHOLD_MS);
      }
    }
  });
})(document);
