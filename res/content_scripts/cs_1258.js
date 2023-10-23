
function mudfish_adclean_06174ce8fc0869627d16a391c08b5071() {
  try {
    Sizzle(`body > .adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_06174ce8fc0869627d16a391c08b5071 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_06174ce8fc0869627d16a391c08b5071, function (items) {
  if (mudfish_adclean_g_conf_06174ce8fc0869627d16a391c08b5071.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_06174ce8fc0869627d16a391c08b5071();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_06174ce8fc0869627d16a391c08b5071();
    });
  }
});
