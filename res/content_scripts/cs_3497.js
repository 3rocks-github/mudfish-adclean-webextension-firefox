
function mudfish_adclean_66e05d2e1753e35a7c748819cc0b4664() {
  try {
    Sizzle(`body > div[style*="position: fixed;"][style*="z-index:99999"][style*="bottom:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_66e05d2e1753e35a7c748819cc0b4664 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_66e05d2e1753e35a7c748819cc0b4664, function (items) {
  if (mudfish_adclean_g_conf_66e05d2e1753e35a7c748819cc0b4664.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_66e05d2e1753e35a7c748819cc0b4664();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_66e05d2e1753e35a7c748819cc0b4664();
    });
  }
});
