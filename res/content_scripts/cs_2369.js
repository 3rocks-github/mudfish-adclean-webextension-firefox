
function mudfish_adclean_0146cddacebceec57747bb08abefc587() {
  try {
    Sizzle(`div.section-leftmiddle-topmiddle.cf`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0146cddacebceec57747bb08abefc587 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0146cddacebceec57747bb08abefc587, function (items) {
  if (mudfish_adclean_g_conf_0146cddacebceec57747bb08abefc587.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0146cddacebceec57747bb08abefc587();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0146cddacebceec57747bb08abefc587();
    });
  }
});
