
function mudfish_adclean_4f8f98ff7400ea6d6afe6863515a131b() {
  try {
    Sizzle(`div[class^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4f8f98ff7400ea6d6afe6863515a131b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4f8f98ff7400ea6d6afe6863515a131b, function (items) {
  if (mudfish_adclean_g_conf_4f8f98ff7400ea6d6afe6863515a131b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4f8f98ff7400ea6d6afe6863515a131b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4f8f98ff7400ea6d6afe6863515a131b();
    });
  }
});
