(function(){
  function rescale() {
    var vw = document.documentElement.clientWidth;
    document.querySelectorAll('.row-outer').forEach(function(outer){
      var row = outer.querySelector('.scale-row');
      if (!row) return;
      row.style.transform = 'scale(1)';
      row.style.width = 'auto';
      var natural = row.scrollWidth;
      if (!natural) return;
      var scale = Math.min(1, vw / natural);
      row.style.transform = 'scale(' + scale + ')';
      outer.style.maxWidth = (natural * scale) + 'px';
      outer.style.margin = '0 auto';
    });
  }
  window.addEventListener('resize', rescale);
  window.addEventListener('orientationchange', rescale);
  window.addEventListener('DOMContentLoaded', rescale);
})();