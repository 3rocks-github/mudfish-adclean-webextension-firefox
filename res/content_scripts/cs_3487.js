
function mudfish_adclean_b173f7fd922d1050ca3cb474a6077863() {
  try {
    Sizzle(`div[class*="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b173f7fd922d1050ca3cb474a6077863 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b173f7fd922d1050ca3cb474a6077863, function (items) {
  if (mudfish_adclean_g_conf_b173f7fd922d1050ca3cb474a6077863.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b173f7fd922d1050ca3cb474a6077863();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b173f7fd922d1050ca3cb474a6077863();
    });
  }
});
