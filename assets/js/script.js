// Mobile menu toggle
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Testimonials data (Fiverr reviews)
const testimonials = [
  { name: "Anjaleeanuththa", country: "Sri Lanka",    flag: "🇱🇰", text: "Glad to work with him. Submitted the work according to my expectations. Recommend for others.",                   avatar: "AA" },
  { name: "Kyrancbl",        country: "Netherlands",  flag: "🇳🇱", text: "Communication was great with the seller and was very helpful. The website was exactly how I wanted.",             avatar: "KC" },
  { name: "Properob",        country: "United States",flag: "🇺🇸", text: "Excellent collaborative style and easy communication. Ranjith got it done extremely fast.",                        avatar: "PB" },
  { name: "Oscar Hiemcke",   country: "Netherlands",  flag: "🇳🇱", text: "Very skilled and exceeded my expectations with the quality of the work.",                                          avatar: "OH" },
  { name: "Clifford Latty",  country: "United States",flag: "🇺🇸", text: "Very detailed, knowledgeable, and accommodating to changes.",                                                       avatar: "CL" },
  { name: "Ayush Tim",       country: "Australia",    flag: "🇦🇺", text: "Everything was good and I am happy with the results.",                                                               avatar: "AT" },
  { name: "Zhensr",          country: "United States",flag: "🇺🇸", text: "Ranjith works professionally and finished the job in one day.",                                                     avatar: "ZR" },
  { name: "Jaco Bluke",      country: "Ireland",      flag: "🇮🇪", text: "Very cooperative throughout the service and completed the task quickly.",                                            avatar: "JB" },
  { name: "Troyk",           country: "Jamaica",      flag: "🇯🇲", text: "Communication was great and he walked me through everything.",                                                       avatar: "TK" },
  { name: "Farhad Gohar",    country: "United Kingdom",flag: "🇬🇧",text: "Amazing website and very professional.",                                                                             avatar: "FG" },
  { name: "WF Media",        country: "Germany",      flag: "🇩🇪", text: "Absolutely thrilled with the website redesign. Clean, fast, and exactly on point.",                                 avatar: "WF" },
  { name: "Tjugge",          country: "Sweden",       flag: "🇸🇪", text: "Fast reply and did a great job.",                                                                                    avatar: "TJ" },
  { name: "Jachin",          country: "United States",flag: "🇺🇸", text: "Ranjith communicated a lot about the progress of the project.",                                                     avatar: "JC" },
  { name: "Cyranodd",        country: "Netherlands",  flag: "🇳🇱", text: "Lovely working with Ranjith. Very fast reply.",                                                                     avatar: "CO" },
  { name: "Sams Theos",      country: "Australia",    flag: "🇦🇺", text: "Excellent work and incredible turnaround time.",                                                                     avatar: "ST" },
  { name: "Adam Dreja",      country: "Libya",        flag: "🇱🇾", text: "Third project and all ended in a satisfactory result.",                                                              avatar: "AD" },
  { name: "Jillen Rique",    country: "United Kingdom",flag: "🇬🇧",text: "Delivery was done well with no issues.",                                                                             avatar: "JR" },
  { name: "Stemmycon",       country: "Nigeria",      flag: "🇳🇬", text: "Nice working with you.",                                                                                             avatar: "SC" },
  { name: "Willam Kelbert",  country: "Singapore",    flag: "🇸🇬", text: "Fantastic experience and top-notch e-commerce solution.",                                                           avatar: "WK" },
  { name: "Talen Bekova",    country: "Kyrgyzstan",   flag: "🇰🇬", text: "Extremely intelligent and professional developer.",                                                                  avatar: "TB" },
];

function createCard(t) {
  return `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">
          <span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span>
        </div>
        <p class="testimonial-text">"${t.text}"</p>
      </div>
      <div class="testimonial-author">
        <div class="avatar">${t.avatar}</div>
        <div>
          <p style="font-weight:600;font-size:13px;color:#111827;">${t.name}</p>
          <p class="author-flag">${t.flag} ${t.country}</p>
        </div>
      </div>
    </div>
  `;
}

const row1El = document.getElementById("row1");
const row2El = document.getElementById("row2");

if (row1El && row2El) {
  const half = Math.ceil(testimonials.length / 2);
  const row1Data = testimonials.slice(0, half);
  const row2Data = testimonials.slice(half);

  // Duplicate for seamless loop
  row1El.innerHTML = [...row1Data, ...row1Data].map(createCard).join("");
  row2El.innerHTML = [...row2Data, ...row2Data].map(createCard).join("");
}

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove("text-[#22c55e]");
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.classList.add("text-[#22c55e]");
        }
      });
    }
  });
}, { rootMargin: "-40% 0px -50% 0px" });

sections.forEach(s => observer.observe(s));
