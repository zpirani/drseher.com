// Shared nav + footer for Dr. Seher site
(function(){
  const here = (location.pathname.split('/').pop() || 'index.html').replace('.html','');
  const inPages = location.pathname.includes('/pages/');
  const root = inPages ? '../' : '';

  const navHTML = `
<nav class="top">
  <div class="inner">
    <a href="${root}index.html" class="mark">DOCTOR SEHER</a>
    <ul id="nav-menu">
      <li><a href="${root}index.html" data-p="index">Home</a></li>
      <li><a href="${root}pages/about.html" data-p="about">About Me</a></li>
      <li><a href="${root}pages/work-with-me.html" data-p="work-with-me">Work With Me</a></li>
      <li class="dropdown"><a href="${root}pages/thriving-mama.html" data-p="thriving-mama">Thriving Mama</a>
        <ul class="dropdown-menu">
          <li><a href="${root}pages/thriving-mama.html">Overview</a></li>
          <li><a href="${root}pages/thriving-mama-youtube.html">YouTube Channel</a></li>
          <li><a href="${root}pages/thriving-mama-join.html">Join the Community</a></li>
        </ul>
      </li>
      <li><a href="${root}pages/blog.html" data-p="blog">Blog</a></li>
      <li><a href="${root}pages/contact.html" data-p="contact">Contact</a></li>
    </ul>
    <a href="${root}pages/booking.html" class="cta">Book Free Consultation</a>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  const footerHTML = `
<footer class="site">
  <div class="wrap">
    <div class="cols">
      <div>
        <div class="brand">DOCTOR SEHER</div>
        <p class="tag">Empowering mothers through evidence-based health education and a supportive global community.</p>
        <div class="socials">
          <a href="#" aria-label="YouTube">▶</a>
          <a href="#" aria-label="Instagram">◉</a>
          <a href="#" aria-label="LinkedIn">in</a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="${root}index.html">Home</a></li>
          <li><a href="${root}pages/about.html">About Me</a></li>
          <li><a href="${root}pages/work-with-me.html">Work With Me</a></li>
          <li><a href="${root}pages/thriving-mama.html">Thriving Mama</a></li>
        </ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul>
          <li><a href="${root}pages/thriving-mama-youtube.html">YouTube Channel</a></li>
          <li><a href="${root}pages/blog.html">Wellness Blog</a></li>
          <li><a href="${root}pages/booking.html">Book a Call</a></li>
          <li><a href="${root}pages/thriving-mama-join.html">Join Community</a></li>
        </ul>
      </div>
      <div>
        <h4>Subscribe</h4>
        <p class="tag">Join the thriving mamas getting weekly evidence-based health tips.</p>
        <form class="sub-form" onsubmit="event.preventDefault(); this.querySelector('button').textContent='Subscribed ✓'">
          <input type="email" placeholder="Email" required />
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
    <div class="bar">
      <span>© 2026 Dr. Seher. All Rights Reserved.</span>
      <div>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>`;

  const n = document.getElementById('site-nav');
  if (n) n.innerHTML = navHTML;
  const f = document.getElementById('site-footer');
  if (f) f.innerHTML = footerHTML;

  document.querySelectorAll('nav.top a[data-p]').forEach(a => {
    if (a.dataset.p === here) a.classList.add('active');
  });

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // close on link click
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
})();
