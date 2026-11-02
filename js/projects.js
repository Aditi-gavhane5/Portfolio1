window.portfolioProjects = [
  {
    name: "CompareX",
    category: "PRICE COMPARISON",
    description: "A product price comparison platform designed to help users compare product prices across multiple shopping platforms and identify the best available deals.",
    image: "assets/projects/comparex.png",
    skills: ["HTML", "CSS", "JavaScript", "Python"]
  },
  {
    name: "EchoAI",
    category: "PERSONAL AI ASSISTANT",
    description: "An AI-powered personal assistant built using Gemini AI. It allows users to ask questions, upload documents, receive explanations, and interact with an AI assistant with conversational context.",
    image: "assets/projects/echoai.png",
    skills: ["HTML", "CSS", "JavaScript", "Gemini API"]
  },
  {
    name: "EmberWatch",
    category: "GLOBAL DISASTER MONITOR",
    description: "A global disaster monitoring platform that tracks natural disasters through interactive maps and real-time data. It includes disaster categories such as wildfires, floods, earthquakes, dust storms, sandstorms, volcanoes and severe storms.",
    image: "assets/projects/emberwatch.png",
    skills: ["HTML", "CSS", "JavaScript", "APIs", "Google Maps"]
  },
  {
    name: "Vendor Performance Analysis",
    category: "DATA ANALYTICS | POWER BI DASHBOARD",
    description: "An end-to-end vendor performance analysis project focused on evaluating vendor efficiency, inventory levels, stock distribution, and sales-related metrics. The project uses data analysis and visualization techniques to transform raw business data into meaningful insights and support data-driven decision-making.",
    image: "assets/projects/vendor-performance-analysis.png",
    skills: ["Python", "SQL", "SQLite", "Pandas", "Matplotlib", "Seaborn", "Power BI"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("projectsList");
  if (!target || !window.portfolioProjects) return;
  target.innerHTML = window.portfolioProjects.map((p, i) => `
    <article class="project-card">
      <div class="project-visual ${p.image ? 'has-project-image' : ''}" data-gallery="${i}">
        ${p.image ? `<img src="${p.image}" alt="${p.name} project screenshot" loading="lazy">` : `<div><span class="project-placeholder-icon">▣</span><strong>${p.name}<br>Screenshot coming soon</strong><small>Image not supplied yet</small></div>`}
        <span class="project-number">PROJECT / 0${i + 1}</span>
        <button class="gallery-button" data-gallery="${i}" type="button">View screenshot &nbsp; →</button>
      </div>
      <div class="project-copy">
        <div class="project-category">${p.category}${p.status ? ` <span class="project-status">${p.status}</span>` : ""}</div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        ${p.note ? `<p class="project-note">${p.note}</p>` : ""}
        <div class="tag-list">${p.skills.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="project-links">
          <button class="text-link gallery-text-button" data-gallery="${i}" type="button">Open screenshot ↗</button>
        </div>
      </div>
    </article>
  `).join("");
});
