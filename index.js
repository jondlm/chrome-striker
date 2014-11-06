(function(d) {
  var mouseX = 0;
  var mouseY = 0;
  var deleteTimeout;
  var SHIFT_THRESHOLD_MS = 500;
  var DELETE_DELAY = 1000;

  d.addEventListener('mousemove', function(e) { mouseX = e.x; mouseY = e.y; });
  d.body.addEventListener('keydown', function(e) {
    if (e.keyCode === 16) {
      el = d.elementFromPoint(mouseX, mouseY);

      el.classList.add('about-to-delete');

      deleteTimeout = setTimeout(function() {
        el.parentElement.removeChild(el);
      }, DELETE_DELAY);

      d.addEventListener('keyup', function(e) {
        if (e.keyCode === 16) {
          el.classList.remove('about-to-delete');
          clearTimeout(deleteTimeout);
        }
      });
    }
  });

})(document);
