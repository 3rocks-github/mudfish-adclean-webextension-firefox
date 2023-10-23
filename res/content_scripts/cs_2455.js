
function mudfish_adclean_2fa454867c91335de560cae98466eedc() {
  try {
    Sizzle(`div[id$="_best"] ul[class*="best_list"] li:has(a[href][target="_blank"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2fa454867c91335de560cae98466eedc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2fa454867c91335de560cae98466eedc, function (items) {
  if (mudfish_adclean_g_conf_2fa454867c91335de560cae98466eedc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2fa454867c91335de560cae98466eedc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2fa454867c91335de560cae98466eedc();
    });
  }
});
