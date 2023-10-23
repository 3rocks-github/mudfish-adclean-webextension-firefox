
function mudfish_adclean_060f8391f2ee06f2ad4872c4570f1e30() {
  try {
    Sizzle(`article > div[class^="sc-"] > aside[class*=" "]`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_060f8391f2ee06f2ad4872c4570f1e30 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_060f8391f2ee06f2ad4872c4570f1e30, function (items) {
  if (mudfish_adclean_g_conf_060f8391f2ee06f2ad4872c4570f1e30.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_060f8391f2ee06f2ad4872c4570f1e30();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_060f8391f2ee06f2ad4872c4570f1e30();
    });
  }
});
