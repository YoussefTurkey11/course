(function () {
  function setupToggle(toggleId, contentId, plusId, closeId) {
    const toggle = document.getElementById(toggleId);
    const content = document.getElementById(contentId);
    const plus = document.getElementById(plusId);
    const close = document.getElementById(closeId);
    if (!toggle || !content || !plus || !close) return;

    function togglePanel(expand) {
      const isHidden = content.classList.contains("hidden");
      if (expand === true) {
        content.classList.remove("hidden");
        plus.classList.add("hidden");
        close.classList.remove("hidden");
        toggle.setAttribute("aria-expanded", "true");
      } else if (expand === false) {
        content.classList.add("hidden");
        plus.classList.remove("hidden");
        close.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        if (isHidden) {
          content.classList.remove("hidden");
          plus.classList.add("hidden");
          close.classList.remove("hidden");
          toggle.setAttribute("aria-expanded", "true");
        } else {
          content.classList.add("hidden");
          plus.classList.remove("hidden");
          close.classList.add("hidden");
          toggle.setAttribute("aria-expanded", "false");
        }
      }
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      togglePanel();
    });

    toggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        togglePanel();
      }
    });
  }

  setupToggle("toggle1", "contentToggle1", "plus1", "close1");
  setupToggle("toggle2", "contentToggle2", "plus2", "close2");
  setupToggle("toggle3", "contentToggle3", "plus3", "close3");
})();
