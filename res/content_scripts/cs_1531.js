
function mudfish_adclean_56ca5d0526e7ff32daa981b093584909() {
  try {
    Sizzle(`div[class*="Advertisement_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_56ca5d0526e7ff32daa981b093584909 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_56ca5d0526e7ff32daa981b093584909, function (items) {
  if (mudfish_adclean_g_conf_56ca5d0526e7ff32daa981b093584909.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_56ca5d0526e7ff32daa981b093584909();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_56ca5d0526e7ff32daa981b093584909();
    });
  }
});
