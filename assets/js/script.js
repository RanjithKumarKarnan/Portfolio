/* ─── Mobile menu ───────────────────────────────────────── */
const menuBtn   = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn) {
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
}
document.querySelectorAll('#mobile-menu a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.add('hidden'))
);

/* ─── Navbar scroll shadow ──────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* ─── Active nav link on scroll ─────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => navObserver.observe(s));

/* ─── Reveal on scroll ──────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // Stagger siblings inside same parent
      const siblings = [...e.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(e.target);
      setTimeout(() => e.target.classList.add('visible'), idx * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* ─── Testimonials ──────────────────────────────────────── */
const testimonials = [
  { name:'Anjaleeanuththa', country:'Sri Lanka',     flag:'🇱🇰', text:'Glad to work with him. Submitted the work according to my expectations. Recommend for others.',                 avatar:'AA' },
  { name:'Kyrancbl',        country:'Netherlands',   flag:'🇳🇱', text:'Communication was great with the seller and was very helpful. The website was exactly how I wanted.',           avatar:'KC' },
  { name:'Properob',        country:'United States', flag:'🇺🇸', text:'Excellent collaborative style and easy communication. Ranjith got it done extremely fast.',                      avatar:'PB' },
  { name:'Oscar Hiemcke',   country:'Netherlands',   flag:'🇳🇱', text:'Very skilled and exceeded my expectations with the quality of the work.',                                        avatar:'OH' },
  { name:'Clifford Latty',  country:'United States', flag:'🇺🇸', text:'Very detailed, knowledgeable, and accommodating to changes.',                                                     avatar:'CL' },
  { name:'Ayush Tim',       country:'Australia',     flag:'🇦🇺', text:'Everything was good and I am happy with the results.',                                                             avatar:'AT' },
  { name:'Zhensr',          country:'United States', flag:'🇺🇸', text:'Ranjith works professionally and finished the job in one day.',                                                   avatar:'ZR' },
  { name:'Jaco Bluke',      country:'Ireland',       flag:'🇮🇪', text:'Very cooperative throughout the service and completed the task quickly.',                                          avatar:'JB' },
  { name:'Troyk',           country:'Jamaica',       flag:'🇯🇲', text:'Communication was great and he walked me through everything.',                                                     avatar:'TK' },
  { name:'Farhad Gohar',    country:'United Kingdom',flag:'🇬🇧', text:'Amazing website and very professional.',                                                                           avatar:'FG' },
  { name:'WF Media',        country:'Germany',       flag:'🇩🇪', text:'Absolutely thrilled with the website redesign. Clean, fast, and exactly on point.',                               avatar:'WF' },
  { name:'Tjugge',          country:'Sweden',        flag:'🇸🇪', text:'Fast reply and did a great job.',                                                                                  avatar:'TJ' },
  { name:'Jachin',          country:'United States', flag:'🇺🇸', text:'Ranjith communicated a lot about the progress of the project.',                                                   avatar:'JC' },
  { name:'Cyranodd',        country:'Netherlands',   flag:'🇳🇱', text:'Lovely working with Ranjith. Very fast reply.',                                                                   avatar:'CO' },
  { name:'Sams Theos',      country:'Australia',     flag:'🇦🇺', text:'Excellent work and incredible turnaround time.',                                                                   avatar:'ST' },
  { name:'Adam Dreja',      country:'Libya',         flag:'🇱🇾', text:'Third project and all ended in a satisfactory result.',                                                            avatar:'AD' },
  { name:'Jillen Rique',    country:'United Kingdom',flag:'🇬🇧', text:'Delivery was done well with no issues.',                                                                           avatar:'JR' },
  { name:'Stemmycon',       country:'Nigeria',       flag:'🇳🇬', text:'Nice working with you.',                                                                                           avatar:'SC' },
  { name:'Willam Kelbert',  country:'Singapore',     flag:'🇸🇬', text:'Fantastic experience and top-notch e-commerce solution.',                                                         avatar:'WK' },
  { name:'Talen Bekova',    country:'Kyrgyzstan',    flag:'🇰🇬', text:'Extremely intelligent and professional developer.',                                                                avatar:'TB' },
];

function card(t) {
  return `
    <div class="t-card">
      <div>
        <div class="t-stars">
          <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i><i class="ri-star-fill"></i>
        </div>
        <p class="t-text">"${t.text}"</p>
      </div>
      <div class="t-author">
        <div class="t-avatar">${t.avatar}</div>
        <div>
          <p class="t-name">${t.name}</p>
          <p class="t-country">${t.flag} ${t.country}</p>
        </div>
      </div>
    </div>`;
}

const r1 = document.getElementById('row1');
const r2 = document.getElementById('row2');
if (r1 && r2) {
  const half = Math.ceil(testimonials.length / 2);
  const d1 = testimonials.slice(0, half);
  const d2 = testimonials.slice(half);
  r1.innerHTML = [...d1, ...d1].map(card).join('');
  r2.innerHTML = [...d2, ...d2].map(card).join('');
}
