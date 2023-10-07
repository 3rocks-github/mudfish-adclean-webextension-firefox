
function mudfish_adclean_caa3f00556ecb1ecb5e71d3ffa17fd57() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#ebayPowerClickBottomArea`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_caa3f00556ecb1ecb5e71d3ffa17fd57();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_caa3f00556ecb1ecb5e71d3ffa17fd57();
  });
}
