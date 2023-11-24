
function mudfish_adclean_4485762ebf829df1dacb1c2da8a6a537() {
  try {
    Sizzle(`.left_area > a[href^="https://smartstore.naver.com/"] + .h20 + .line`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4485762ebf829df1dacb1c2da8a6a537 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4485762ebf829df1dacb1c2da8a6a537, function (items) {
  if (mudfish_adclean_g_conf_4485762ebf829df1dacb1c2da8a6a537.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4485762ebf829df1dacb1c2da8a6a537();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4485762ebf829df1dacb1c2da8a6a537();
    });
  }
});
