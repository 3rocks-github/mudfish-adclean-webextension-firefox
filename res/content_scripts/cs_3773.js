
function mudfish_adclean_1a94bd98d6b4cb80ffde169801868cbd() {
  try {
    Sizzle(`.banner-box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1a94bd98d6b4cb80ffde169801868cbd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1a94bd98d6b4cb80ffde169801868cbd, function (items) {
  if (mudfish_adclean_g_conf_1a94bd98d6b4cb80ffde169801868cbd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1a94bd98d6b4cb80ffde169801868cbd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1a94bd98d6b4cb80ffde169801868cbd();
    });
  }
});
