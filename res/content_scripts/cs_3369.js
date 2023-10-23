
function mudfish_adclean_5f779085f29e7a96cd6d33f37cd1796a() {
  try {
    Sizzle(`div[class^="teads-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5f779085f29e7a96cd6d33f37cd1796a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5f779085f29e7a96cd6d33f37cd1796a, function (items) {
  if (mudfish_adclean_g_conf_5f779085f29e7a96cd6d33f37cd1796a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5f779085f29e7a96cd6d33f37cd1796a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5f779085f29e7a96cd6d33f37cd1796a();
    });
  }
});
