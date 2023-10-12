
function mudfish_adclean_4bfe723e29ac312bf38ba76da5bc43a8() {
  try {
    Sizzle(`.con_rt > div[class^="lcrt"] ~ div[class^="mcrt"]:has(img[src*="/common/ad_"].ad)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4bfe723e29ac312bf38ba76da5bc43a8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4bfe723e29ac312bf38ba76da5bc43a8, function (items) {
  if (mudfish_adclean_g_conf_4bfe723e29ac312bf38ba76da5bc43a8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4bfe723e29ac312bf38ba76da5bc43a8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
