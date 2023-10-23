
function mudfish_adclean_61872d0b4277e9ef818327b77ae9f593() {
  try {
    Sizzle(`.news_doc #footer`).forEach(element => {
      element.style.position = "static !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_61872d0b4277e9ef818327b77ae9f593 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_61872d0b4277e9ef818327b77ae9f593, function (items) {
  if (mudfish_adclean_g_conf_61872d0b4277e9ef818327b77ae9f593.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_61872d0b4277e9ef818327b77ae9f593();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_61872d0b4277e9ef818327b77ae9f593();
    });
  }
});
