window.portfolioCertificates = [
  {
    kind: "CERTIFICATE",
    title: "Introduction to Prompt Engineering with GitHub Copilot",
    provider: "Simplilearn · Microsoft",
    date: "August 30, 2026",
    url: "assets/certificates/prompt-engineering-github-copilot.pdf"
  },
  {
    kind: "CERTIFICATE",
    title: "Power BI for Beginners",
    provider: "Simplilearn · Microsoft",
    date: "August 30, 2026",
    url: "assets/certificates/power-bi-for-beginners.pdf"
  },
  {
    kind: "JOB SIMULATION",
    title: "Data Analytics Job Simulation",
    provider: "Deloitte · Forage",
    date: "November 4, 2025",
    url: "assets/certificates/deloitte-data-analytics-job-simulation.pdf"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("certificatesList");
  if (!target || !window.portfolioCertificates) return;
  target.innerHTML = window.portfolioCertificates.map((c, i) => `
    <article class="certificate-card">
      <span class="certificate-icon">${i === 1 ? "▥" : "♙"}</span>
      <div class="certificate-info">
        <div class="certificate-kind">${c.kind}</div>
        <h3>${c.title}</h3>
        <p>${c.provider} &nbsp;·&nbsp; ${c.date}</p>
      </div>
      <a class="certificate-link" href="${c.url}" target="_blank" rel="noopener noreferrer">▤ &nbsp; View certificate ↗</a>
    </article>
  `).join("") + `
    <div class="certificate-notes">
      <article class="certificate-note">
        <span class="note-label">Workshop · 2024</span>
        <h3>Game Development Using Python</h3>
        <p>Alegria 2024 · IEEE-PCE Student Branch</p>
        <p style="margin-top:14px">Workshop attended at Pillai College of Engineering.</p>
      </article>
      <article class="certificate-note">
        <span class="note-label">Continuous Learning</span>
        <h3>Continuous Skill Development</h3>
        <p>Actively applying data analysis, visualization, and software engineering across practical projects.</p>
      </article>
    </div>
  `;
});
