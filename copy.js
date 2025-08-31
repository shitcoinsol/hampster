(function(){
  function copyCA() {
    var text = document.getElementById('ca-text').textContent.trim();
    navigator.clipboard.writeText(text).then(function(){
      var ca = document.getElementById('ca');
      var old = ca.textContent;
      ca.textContent = 'copied!;
      setTimeout(function(){ ca.innerHTML = 'ca:<span id="ca-text">' + text + '</span>'; }, 1200);
    }).catch(function(){
      var text = document.getElementById('ca-text').textContent.trim();
      var el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select(); document.execCommand('copy');
      document.body.removeChild(el);
    });
  }
  document.addEventListener('DOMContentLoaded', function(){
    var ca = document.getElementById('ca');
    ca.addEventListener('click', copyCA);
    ca.addEventListener('keypress', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); copyCA(); }});
  });
})();