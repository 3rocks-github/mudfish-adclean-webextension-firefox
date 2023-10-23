
function mudfish_adclean_b951dcf2408d9264b6d83618515f1960() {
  try {
    Sizzle(`div[class^="das_article"][class$="_wrap"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b951dcf2408d9264b6d83618515f1960 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b951dcf2408d9264b6d83618515f1960, function (items) {
  if (mudfish_adclean_g_conf_b951dcf2408d9264b6d83618515f1960.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b951dcf2408d9264b6d83618515f1960();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b951dcf2408d9264b6d83618515f1960();
    });
  }
});
