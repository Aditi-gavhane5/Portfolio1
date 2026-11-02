window.portfolioSkills = [
  {icon:"</>", title:"Development", description:"Building interfaces and software with a clear purpose.", skills:["Python","HTML","CSS","JavaScript","Flask"]},
  {icon:"▤", title:"Data & databases", description:"Working with structured data, analysis, and visualization.", skills:["MySQL","SQLite","Pandas","Power BI","Tableau (Basics)"]},
  {icon:"▣", title:"Tools & practices", description:"Tools that support collaboration and practical delivery.", skills:["BeautifulSoup","Git","GitHub","AWS (Basics)"]},
  {icon:"◌", title:"How I work", description:"The ways of thinking I bring to a team and a problem.", skills:["Communication","Teamwork","Analytical thinking","Problem solving","Data-driven decision making","Adaptability"]}
];
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("skillsGrid");
  if (!target || !window.portfolioSkills) return;
  target.innerHTML = window.portfolioSkills.map(s => `<article class="skill-card"><div class="skill-card-head"><span class="skill-icon">${s.icon}</span><span class="skill-set">SKILL SET</span></div><h3>${s.title}</h3><p>${s.description}</p><div class="tag-list">${s.skills.map(t => `<span class="tag">${t}</span>`).join("")}</div></article>`).join("");
});