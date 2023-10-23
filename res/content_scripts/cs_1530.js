
function mudfish_adclean_065c22a412f6ddc00a6f50078269a72a() {
  try {
    Sizzle(`aside[class^="banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_065c22a412f6ddc00a6f50078269a72a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_065c22a412f6ddc00a6f50078269a72a, function (items) {
  if (mudfish_adclean_g_conf_065c22a412f6ddc00a6f50078269a72a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_065c22a412f6ddc00a6f50078269a72a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_065c22a412f6ddc00a6f50078269a72a();
    });
  }
});
