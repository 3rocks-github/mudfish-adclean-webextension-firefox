
function mudfish_adclean_f67715c92fd06a9063f66afccd541541() {
  try {
    Sizzle(`div[class^="AD_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f67715c92fd06a9063f66afccd541541 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f67715c92fd06a9063f66afccd541541, function (items) {
  if (mudfish_adclean_g_conf_f67715c92fd06a9063f66afccd541541.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f67715c92fd06a9063f66afccd541541();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f67715c92fd06a9063f66afccd541541();
    });
  }
});
