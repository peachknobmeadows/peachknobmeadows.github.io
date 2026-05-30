/* ================================================================
   PEACH KNOB MEADOWS ROAD MAINTENANCE ASSOCIATION
   ================================================================ */

(function () {
  "use strict";

  /* ---- Shared footer ------------------------------------------- */
  const siteFooter = document.getElementById("site-footer");
  if (siteFooter) {
    fetch("footer.html")
      .then((r) => r.text())
      .then((html) => {
        siteFooter.innerHTML = html;
        const yearEl = siteFooter.querySelector(".footer-year");
        if (yearEl) yearEl.textContent = new Date().getFullYear();
      });
  }

  /* ---- Shared nav ---------------------------------------------- */
  const siteNav = document.getElementById("site-nav");
  if (siteNav) {
    fetch("nav.html")
      .then((r) => r.text())
      .then((html) => {
        siteNav.innerHTML = html;

        const nav = siteNav;
        window.addEventListener(
          "scroll",
          () => {
            nav.classList.toggle("scrolled", window.scrollY > 20);
          },
          { passive: true },
        );
      });
  }
})();
