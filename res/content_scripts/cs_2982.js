
function mudfish_adclean_5705c7f5e7003da92cb3f15f23d7557d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`main ~ aside article[style*="height:"][style*="margin:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5705c7f5e7003da92cb3f15f23d7557d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5705c7f5e7003da92cb3f15f23d7557d();
  });
}
