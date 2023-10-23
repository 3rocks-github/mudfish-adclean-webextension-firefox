
function mudfish_adclean_09b06b58bcfe68c9f9fcc3451e7d0c69() {
  try {
    Sizzle(`section[class*=" "]#header-standard-container`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_09b06b58bcfe68c9f9fcc3451e7d0c69 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_09b06b58bcfe68c9f9fcc3451e7d0c69, function (items) {
  if (mudfish_adclean_g_conf_09b06b58bcfe68c9f9fcc3451e7d0c69.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_09b06b58bcfe68c9f9fcc3451e7d0c69();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_09b06b58bcfe68c9f9fcc3451e7d0c69();
    });
  }
});
