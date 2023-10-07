(function () {
  function mudfish_adclean_is_numeric(str) {
    if (typeof str != "string")
      return false;
    return !isNaN(str) && !isNaN(parseFloat(str))
  }
  function mudfish_adclean_slrclub_skip() {
    try {
      Sizzle(`div`).forEach(element => {
        if (mudfish_adclean_is_numeric(element.id)) {
          element.style.display = "none";
        }
      });
    } catch (error) {
    }
  }
  const observer = new MutationObserver(() => {
    mudfish_adclean_slrclub_skip();
  });
  observer.observe(document, { childList: true, subtree: true });
})();
