
function mudfish_adclean_a75391fce4ef314d795ac34e5d6282fd() {
  try {
    Sizzle(`aside > div[class*=" "]:has(iframe[id^="google_ads_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a75391fce4ef314d795ac34e5d6282fd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a75391fce4ef314d795ac34e5d6282fd, function (items) {
  if (mudfish_adclean_g_conf_a75391fce4ef314d795ac34e5d6282fd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a75391fce4ef314d795ac34e5d6282fd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a75391fce4ef314d795ac34e5d6282fd();
    });
  }
});
