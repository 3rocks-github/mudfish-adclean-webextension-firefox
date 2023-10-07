
function mudfish_adclean_2c3de37c56cc748574570589a4049ebd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="dt.co.kr/ad.html"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2c3de37c56cc748574570589a4049ebd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2c3de37c56cc748574570589a4049ebd();
  });
}
