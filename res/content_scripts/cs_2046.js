
function mudfish_adclean_5d14174a0712ff32f61555e59375ee64() {
  try {
    Sizzle(`ul.board-body > li[id^="sponser_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5d14174a0712ff32f61555e59375ee64 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5d14174a0712ff32f61555e59375ee64, function (items) {
  if (mudfish_adclean_g_conf_5d14174a0712ff32f61555e59375ee64.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5d14174a0712ff32f61555e59375ee64();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
