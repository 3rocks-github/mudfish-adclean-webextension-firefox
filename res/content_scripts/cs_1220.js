
function mudfish_adclean_9bac31926a4b4d1041f6cf4341ffc862() {
  try {
    Sizzle(`.naver_power_shopping`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9bac31926a4b4d1041f6cf4341ffc862 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9bac31926a4b4d1041f6cf4341ffc862, function (items) {
  if (mudfish_adclean_g_conf_9bac31926a4b4d1041f6cf4341ffc862.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9bac31926a4b4d1041f6cf4341ffc862();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
