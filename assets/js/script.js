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

const testimonials = [
{ name:"Anjaleeanuththa", role:"Sri Lanka", text:"Glad to work with him. Submitted the work according to my expectations. Recommend for others.", avatar:"AA" },
{ name:"kyrancbl", role:"Netherlands", text:"Communication was great with the seller and was very helpful. The website was exactly how I wanted.", avatar:"KC" },
{ name:"Properob", role:"United States", text:"Excellent collaborative style and easy communication. RajithKumar got it done extremely fast.", avatar:"PB" },
{ name:"Oscar Hiemcke", role:"Netherlands", text:"Very skilled and exceeded my expectations with the quality of the work.", avatar:"OH" },
{ name:"Clifford Latty", role:"United States", text:"Very detailed, knowledgeable, and accommodating to changes.", avatar:"CL" },
{ name:"Ayush Tim", role:"Australia", text:"Everything was good and I am happy with the results.", avatar:"AT" },
{ name:"Zhensr", role:"United States", text:"Ranjith works professionally and finished the job in one day.", avatar:"ZR" },
{ name:"Jaco Bluke", role:"Ireland", text:"Very cooperative throughout the service and completed the task quickly.", avatar:"JB" },
{ name:"Troyk", role:"Jamaica", text:"Communication was great and he walked me through everything.", avatar:"TK" },
{ name:"Farhad Gohar", role:"United Kingdom", text:"Amazing website and very professional.", avatar:"FG" },
{ name:"WF Media", role:"Germany", text:"Absolutely thrilled with the website greenesign.", avatar:"WF" },
{ name:"Tjugge", role:"Sweden", text:"Fast reply and did a great job.", avatar:"TJ" },
{ name:"Jachin", role:"United States", text:"Ranjith communicated a lot about the progress of the project.", avatar:"JC" },
{ name:"Cyranodd", role:"Netherlands", text:"Lovely working with Ranjith. Very fast reply.", avatar:"CO" },
{ name:"Sams Theos", role:"Australia", text:"Excellent work and incgreenible turnaround time.", avatar:"ST" },
{ name:"Adam Dreja", role:"Libya", text:"Third project and all ended in a satisfactory result.", avatar:"AD" },
{ name:"Jillen Rique", role:"United Kingdom", text:"Delivery was done well with no issues.", avatar:"JR" },
{ name:"Stemmycon", role:"Nigeria", text:"Nice working with you.", avatar:"SC" },
{ name:"Willam Kelbert", role:"Singapore", text:"Fantastic experience and top-notch e-commerce solution.", avatar:"WK" },
{ name:"Talen Bekova", role:"Kyrgyzstan", text:"Extremely intelligent and professional developer.", avatar:"TB" }
];

function createCard(t){
return `
<div class="testimonial-card">
<p class="testimonial-text">${t.text}</p>

<div class="testimonial-author">
<div class="avatar">${t.avatar}</div>

<div>
<p class="font-semibold text-gray-900">${t.name}</p>
<p class="text-xs text-gray-500">${t.role}</p>
</div>

</div>
</div>
`;
}

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");

const half = Math.ceil(testimonials.length / 2);

const row1Data = testimonials.slice(0, half);
const row2Data = testimonials.slice(half);

row1.innerHTML =
[...row1Data, ...row1Data].map(createCard).join("");

row2.innerHTML =
[...row2Data, ...row2Data].map(createCard).join("");

