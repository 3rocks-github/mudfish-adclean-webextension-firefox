
function mudfish_adclean_db5a7bea05cdcc13de8489c6ff3a2e12() {
  try {
    Sizzle(`a[href*="/ad/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_db5a7bea05cdcc13de8489c6ff3a2e12 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_db5a7bea05cdcc13de8489c6ff3a2e12, function (items) {
  if (mudfish_adclean_g_conf_db5a7bea05cdcc13de8489c6ff3a2e12.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_db5a7bea05cdcc13de8489c6ff3a2e12();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_db5a7bea05cdcc13de8489c6ff3a2e12();
    });
  }
});
