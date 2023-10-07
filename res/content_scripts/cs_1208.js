
function mudfish_adclean_ee86d6f88e5958dd54709af5c6aa060e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.W_wrap > div[style*="height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ee86d6f88e5958dd54709af5c6aa060e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ee86d6f88e5958dd54709af5c6aa060e();
  });
}
