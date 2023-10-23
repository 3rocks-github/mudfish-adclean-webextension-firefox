
function mudfish_adclean_cf2b8859783a68ffcd877e7c5c75ae3b() {
  try {
    Sizzle(`body > #wrap.wrap ~ div[style*="height:"]`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cf2b8859783a68ffcd877e7c5c75ae3b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cf2b8859783a68ffcd877e7c5c75ae3b, function (items) {
  if (mudfish_adclean_g_conf_cf2b8859783a68ffcd877e7c5c75ae3b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cf2b8859783a68ffcd877e7c5c75ae3b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cf2b8859783a68ffcd877e7c5c75ae3b();
    });
  }
});
