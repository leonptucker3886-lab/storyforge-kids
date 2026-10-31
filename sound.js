// StoryForge Kids v0.4 - tap sound + mute toggle (narration uses browser speechSynthesis in app.js)
(function(){
  var muted = localStorage.getItem('sfkMuted') === '1', ctx = null;
  function tap(){
    if (muted) return;
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      var o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime;
      o.type = 'triangle'; o.frequency.setValueAtTime(880, t); o.frequency.exponentialRampToValueAtTime(440, t + 0.12);
      g.gain.setValueAtTime(0.25, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.16);
    } catch (e) {}
  }
  var btn = document.getElementById('mute');
  function render(){ btn.textContent = muted ? '\uD83D\uDD07 Sound off' : '\uD83D\uDD08 Sound on'; btn.setAttribute('aria-pressed', muted ? 'true' : 'false'); }
  btn.addEventListener('click', function(){
    muted = !muted; localStorage.setItem('sfkMuted', muted ? '1' : '0');
    if (muted && window.speechSynthesis) speechSynthesis.cancel();
    render(); tap();
  });
  // Tap sound on story cards / choice buttons
  document.addEventListener('click', function(e){
    var b = e.target.closest && e.target.closest('#choices button, #start, #again');
    if (b) tap();
  }, true);
  // Mute also blocks narration
  document.getElementById('read').addEventListener('click', function(e){
    if (muted) { e.stopImmediatePropagation(); if (window.speechSynthesis) speechSynthesis.cancel(); }
  }, true);
  window.sfkIsMuted = function(){ return muted; };
  render();
})();
