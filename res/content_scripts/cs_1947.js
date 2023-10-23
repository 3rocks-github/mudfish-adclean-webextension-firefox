
function mudfish_adclean_2edde6062e7933ba507b51a9c7f607d1() {
  try {
    Sizzle(`section[id^="aside_"] > div[id$="-sticky-wrap"] > div[id$="-sticky"] > div[id^="w_read_"][class^="boxshow_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2edde6062e7933ba507b51a9c7f607d1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2edde6062e7933ba507b51a9c7f607d1, function (items) {
  if (mudfish_adclean_g_conf_2edde6062e7933ba507b51a9c7f607d1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2edde6062e7933ba507b51a9c7f607d1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2edde6062e7933ba507b51a9c7f607d1();
    });
  }
});
