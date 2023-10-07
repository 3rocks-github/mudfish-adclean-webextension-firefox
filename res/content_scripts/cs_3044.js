
function mudfish_adclean_2ef2d92fbb28fc4203e0b9bb9bbfa40e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.gb-container > .container-widget:has(ins.adsbygoogle)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2ef2d92fbb28fc4203e0b9bb9bbfa40e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2ef2d92fbb28fc4203e0b9bb9bbfa40e();
  });
}
