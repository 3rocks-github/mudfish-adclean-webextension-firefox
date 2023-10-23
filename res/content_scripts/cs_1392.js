
function mudfish_adclean_f7ed8fe431a28b02a86bf5b6132630ec() {
  try {
    Sizzle(`.entry-content > div[id^="top"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f7ed8fe431a28b02a86bf5b6132630ec = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f7ed8fe431a28b02a86bf5b6132630ec, function (items) {
  if (mudfish_adclean_g_conf_f7ed8fe431a28b02a86bf5b6132630ec.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f7ed8fe431a28b02a86bf5b6132630ec();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f7ed8fe431a28b02a86bf5b6132630ec();
    });
  }
});
