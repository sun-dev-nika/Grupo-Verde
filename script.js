(() => {
  "use strict";

  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Sticky header shadow on scroll ---------- */
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  if (navToggle && mobileNav) {
    const closeMenu = () => {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menú");
      mobileNav.classList.remove("open");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Visor de catálogo (PDF embebido en modal) ---------- */
  const pdfModal = document.getElementById("pdfModal");
  const pdfFrame = document.getElementById("pdfModalFrame");
  const pdfLoading = document.getElementById("pdfModalLoading");
  const pdfOpenTriggers = document.querySelectorAll("[data-pdf-open]");
  const pdfCloseTriggers = document.querySelectorAll("[data-pdf-close], #pdfModalClose");

  if (pdfModal && pdfFrame && pdfOpenTriggers.length) {
    const PDF_SRC = "assets/catalogo-grupoverdechile.pdf";
    let lastFocused = null;

    const openPdfModal = () => {
      if (!pdfFrame.getAttribute("src")) {
        pdfFrame.addEventListener(
          "load",
          () => {
            if (pdfLoading) pdfLoading.hidden = true;
          },
          { once: true }
        );
        pdfFrame.setAttribute("src", PDF_SRC);
      }

      lastFocused = document.activeElement;
      pdfModal.classList.add("open");
      pdfModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");

      const closeBtn = document.getElementById("pdfModalClose");
      if (closeBtn) closeBtn.focus();
    };

    const closePdfModal = () => {
      pdfModal.classList.remove("open");
      pdfModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      if (lastFocused instanceof HTMLElement) lastFocused.focus();
    };

    pdfOpenTriggers.forEach((trigger) => {
      trigger.addEventListener("click", openPdfModal);
    });

    pdfCloseTriggers.forEach((trigger) => {
      trigger.addEventListener("click", closePdfModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && pdfModal.classList.contains("open")) {
        closePdfModal();
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

})();
