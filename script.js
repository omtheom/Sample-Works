(function () {
  var root = document.documentElement;
  var body = document.body;
  var mobile = window.matchMedia('(max-width: 900px)');

  /* ---------- Theme switch ---------- */
  var themeSwitch = document.querySelector('.theme-switch');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    themeSwitch.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
  }

  applyTheme(root.getAttribute('data-theme') || 'light');

  themeSwitch.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ---------- Contents toggle ----------
     Desktop: hides or shows the sidebar. Phone: opens or closes the full-screen panel. */
  var toggle = document.querySelector('.contents-toggle');
  var contents = document.getElementById('contents');

  function setContents(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Hide contents' : 'Show contents');
    if (mobile.matches) {
      body.classList.toggle('contents-open', open);
      body.classList.remove('contents-hidden');
    } else {
      body.classList.toggle('contents-hidden', !open);
      body.classList.remove('contents-open');
    }
  }

  function resetContents() { setContents(!mobile.matches); }
  resetContents();
  if (mobile.addEventListener) mobile.addEventListener('change', resetContents);
  else if (mobile.addListener) mobile.addListener(resetContents);

  toggle.addEventListener('click', function () {
    setContents(toggle.getAttribute('aria-expanded') !== 'true');
  });

  contents.addEventListener('click', function (e) {
    if (e.target.closest('a') && mobile.matches) setContents(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('contents-open')) setContents(false);
  });

  /* ---------- Highlight the section being read ---------- */
  var links = Array.prototype.slice.call(contents.querySelectorAll('a'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(function (s) { if (s) observer.observe(s); });
  }

  /* ---------- Video play buttons ---------- */
  document.querySelectorAll('.media .play').forEach(function (button) {
    var frame = button.closest('.media');
    var video = frame.querySelector('video');
    var source = video.querySelector('source');
    // Without a film URL the button stays decorative instead of failing silently on click.
    if (!source || !source.getAttribute('src')) {
      button.disabled = true;
      button.style.cursor = 'default';
      return;
    }
    button.addEventListener('click', function () {
      frame.classList.add('is-playing');
      video.controls = true;
      video.play();
    });
  });

  /* ---------- Portrait carousel ---------- */
  document.querySelectorAll('.carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var slides = Array.prototype.slice.call(track.children);
    var dotsWrap = carousel.querySelector('.carousel-dots');
    var prev = carousel.querySelector('[data-dir="-1"]');
    var next = carousel.querySelector('[data-dir="1"]');
    var current = 0;

    var dots = slides.map(function (slide, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
      return dot;
    });

    function goTo(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }

    function update() {
      var i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== current) {
        // Pause a video that has been swiped away from
        var v = slides[current].querySelector('video');
        if (v && !v.paused) v.pause();
      }
      current = i;
      dots.forEach(function (d, j) { d.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
      prev.disabled = i === 0;
      next.disabled = i === slides.length - 1;
    }

    prev.addEventListener('click', function () { goTo(current - 1); });
    next.addEventListener('click', function () { goTo(current + 1); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
    });

    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { update(); ticking = false; });
    });
    window.addEventListener('resize', update);
    update();
  });
})();
