
function mudfish_adclean_a7533de5f11d2e1fda35ea36a0e0d5ed() {
  try {
    Sizzle(`#content-container > main > div[class^="css-"][class*=" "] ~ div[class^="css-"][class*=" "][style^="margin-bottom:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a7533de5f11d2e1fda35ea36a0e0d5ed = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a7533de5f11d2e1fda35ea36a0e0d5ed, function (items) {
  if (mudfish_adclean_g_conf_a7533de5f11d2e1fda35ea36a0e0d5ed.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a7533de5f11d2e1fda35ea36a0e0d5ed();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a7533de5f11d2e1fda35ea36a0e0d5ed();
    });
  }
});
