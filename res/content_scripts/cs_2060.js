
function mudfish_adclean_d66c223c267a63db440a947c123be8de() {
  try {
    Sizzle(`#sdpAdsBottom`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d66c223c267a63db440a947c123be8de = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d66c223c267a63db440a947c123be8de, function (items) {
  if (mudfish_adclean_g_conf_d66c223c267a63db440a947c123be8de.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d66c223c267a63db440a947c123be8de();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
