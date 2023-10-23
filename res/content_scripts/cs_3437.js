
function mudfish_adclean_f46a3de242a127125073bd64b7ee0450() {
  try {
    Sizzle(`ad-shield-ads`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f46a3de242a127125073bd64b7ee0450 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f46a3de242a127125073bd64b7ee0450, function (items) {
  if (mudfish_adclean_g_conf_f46a3de242a127125073bd64b7ee0450.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f46a3de242a127125073bd64b7ee0450();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f46a3de242a127125073bd64b7ee0450();
    });
  }
});
