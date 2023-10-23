
function mudfish_adclean_ac7b2768ff5c3c30a6b98cb2477c2332() {
  try {
    Sizzle(`.mn_ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ac7b2768ff5c3c30a6b98cb2477c2332 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ac7b2768ff5c3c30a6b98cb2477c2332, function (items) {
  if (mudfish_adclean_g_conf_ac7b2768ff5c3c30a6b98cb2477c2332.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ac7b2768ff5c3c30a6b98cb2477c2332();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ac7b2768ff5c3c30a6b98cb2477c2332();
    });
  }
});
