
function mudfish_adclean_a86dde7112f63a1341d46eeee7ce3a36() {
  try {
    Sizzle(`header > .header-space`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a86dde7112f63a1341d46eeee7ce3a36 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a86dde7112f63a1341d46eeee7ce3a36, function (items) {
  if (mudfish_adclean_g_conf_a86dde7112f63a1341d46eeee7ce3a36.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a86dde7112f63a1341d46eeee7ce3a36();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a86dde7112f63a1341d46eeee7ce3a36();
    });
  }
});
