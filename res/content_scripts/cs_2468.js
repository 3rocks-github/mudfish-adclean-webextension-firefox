
function mudfish_adclean_4bfe723e29ac312bf38ba76da5bc43a8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.con_rt > div[class^="lcrt"] ~ div[class^="mcrt"]:has(img[src*="/common/ad_"].ad)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4bfe723e29ac312bf38ba76da5bc43a8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4bfe723e29ac312bf38ba76da5bc43a8();
  });
}
