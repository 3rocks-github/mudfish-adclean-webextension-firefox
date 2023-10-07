
function mudfish_adclean_ecccb3708e60483c199e9ee08a88016e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class^="banner-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ecccb3708e60483c199e9ee08a88016e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ecccb3708e60483c199e9ee08a88016e();
  });
}
