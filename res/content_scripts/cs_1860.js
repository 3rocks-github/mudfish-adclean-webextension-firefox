
function mudfish_adclean_1bb2d05b4334684d6fb0e14cc594b46a() {
  try {
    Sizzle(`div[id^="veta_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1bb2d05b4334684d6fb0e14cc594b46a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1bb2d05b4334684d6fb0e14cc594b46a, function (items) {
  if (mudfish_adclean_g_conf_1bb2d05b4334684d6fb0e14cc594b46a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1bb2d05b4334684d6fb0e14cc594b46a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1bb2d05b4334684d6fb0e14cc594b46a();
    });
  }
});
