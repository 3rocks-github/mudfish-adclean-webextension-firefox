
function mudfish_adclean_4c72b4feb11027db36f4e58f4b91f0d6() {
  try {
    Sizzle(`.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4c72b4feb11027db36f4e58f4b91f0d6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4c72b4feb11027db36f4e58f4b91f0d6, function (items) {
  if (mudfish_adclean_g_conf_4c72b4feb11027db36f4e58f4b91f0d6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4c72b4feb11027db36f4e58f4b91f0d6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4c72b4feb11027db36f4e58f4b91f0d6();
    });
  }
});
