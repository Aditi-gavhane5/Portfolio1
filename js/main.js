document.addEventListener("DOMContentLoaded", () => {
  const sections = [...document.querySelectorAll(".page-section")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileButton = document.getElementById("mobileMenuButton");
  const mobileClose = document.getElementById("mobileMenuClose");
  const lightbox = document.getElementById("lightbox");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxNote = document.getElementById("lightboxNote");
  let currentProject = 0;

  function activateSection(id, updateHash = true) {
    if (!sections.some(s => s.id === id)) id = "about";
    sections.forEach(s => s.classList.toggle("active", s.id === id));
    navLinks.forEach(a => a.classList.toggle("active", a.dataset.section === id));
    if (updateHash && location.hash !== `#${id}`) history.replaceState(null, "", `#${id}`);
    window.scrollTo({top:0, behavior:"smooth"});
    closeMobileMenu();
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove("open"); mobileMenu.setAttribute("aria-hidden","true");
    mobileButton.setAttribute("aria-expanded","false");
  }
  navLinks.forEach(a => a.addEventListener("click", e => { e.preventDefault(); activateSection(a.dataset.section); }));
  document.querySelectorAll('.brand, .about-bottom a').forEach(a => a.addEventListener("click", e => {
    const id = a.getAttribute("href")?.slice(1);
    if (id && sections.some(s => s.id === id)) { e.preventDefault(); activateSection(id); }
  }));
  mobileButton.addEventListener("click", () => {
    mobileMenu.classList.add("open"); mobileMenu.setAttribute("aria-hidden","false"); mobileButton.setAttribute("aria-expanded","true");
  });
  mobileClose.addEventListener("click", closeMobileMenu);
  mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", e => { e.preventDefault(); activateSection(a.getAttribute("href").slice(1)); }));

  function showProject(index) {
    const projects = window.portfolioProjects || [];
    if (!projects.length) return;
    currentProject = (index + projects.length) % projects.length;
    const project = projects[currentProject];
    lightboxCaption.textContent = project.name;
    lightboxNote.textContent = `${project.category} · Preview (${currentProject + 1} of ${projects.length}) — use arrows or keyboard to browse`;
    if (project.image) {
      lightboxImage.src = project.image;
      lightboxImage.alt = `${project.name} project screenshot`;
      lightboxImage.classList.add("visible");
    } else {
      lightboxImage.removeAttribute("src");
      lightboxImage.alt = "";
      lightboxImage.classList.remove("visible");
    }
  }
  function openLightbox(index) { showProject(index); lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false"); }
  function closeLightbox() { lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden","true"); }
  function moveLightbox(delta) { showProject(currentProject + delta); }

  function copyTextToClipboard(text, onSuccess) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => fallbackPrompt(text, onSuccess));
    } else {
      fallbackPrompt(text, onSuccess);
    }
  }

  function fallbackPrompt(text, onSuccess) {
    try {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      tempInput.style.position = "fixed";
      tempInput.style.opacity = "0";
      document.body.appendChild(tempInput);
      tempInput.focus();
      tempInput.select();
      const success = document.execCommand("copy");
      document.body.removeChild(tempInput);
      if (success) {
        onSuccess();
        return;
      }
    } catch (_) {}
    window.prompt("Copy this email address:", text);
  }

  document.addEventListener("click", e => {
    if (e.target.closest('a[href^="mailto:"]')) return;
    const galleryButton = e.target.closest("[data-gallery]");
    if (galleryButton) openLightbox(Number(galleryButton.dataset.gallery));
    const copyButton = e.target.closest("[data-copy-email]");
    if (copyButton) {
      const email = "gavhaneaditi5@gmail.com";
      const originalHTML = copyButton.innerHTML;
      copyTextToClipboard(email, () => {
        copyButton.innerHTML = "✓ &nbsp; Email copied";
        setTimeout(() => { copyButton.innerHTML = originalHTML; }, 2000);
      });
    }
  });
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => moveLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => moveLightbox(1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeLightbox(); closeMobileMenu(); }
    if (lightbox.classList.contains("open") && e.key === "ArrowLeft") moveLightbox(-1);
    if (lightbox.classList.contains("open") && e.key === "ArrowRight") moveLightbox(1);
  });
  window.addEventListener("hashchange", () => activateSection(location.hash.slice(1), false));
  activateSection(location.hash.slice(1) || "about", false);
});
