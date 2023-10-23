
function mudfish_adclean_14ae79300e5f714bb01c4cd192e9a435() {
  try {
    Sizzle(`tr > td div.bridge`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_14ae79300e5f714bb01c4cd192e9a435 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_14ae79300e5f714bb01c4cd192e9a435, function (items) {
  if (mudfish_adclean_g_conf_14ae79300e5f714bb01c4cd192e9a435.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_14ae79300e5f714bb01c4cd192e9a435();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_14ae79300e5f714bb01c4cd192e9a435();
    });
  }
});
