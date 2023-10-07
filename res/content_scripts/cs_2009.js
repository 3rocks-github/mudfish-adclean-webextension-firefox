
function mudfish_adclean_e814d4791f3bafcb8a3b705992aa152e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div.warp > a[href*="//someblossom.co.kr/product/detail.html?"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e814d4791f3bafcb8a3b705992aa152e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e814d4791f3bafcb8a3b705992aa152e();
  });
}
