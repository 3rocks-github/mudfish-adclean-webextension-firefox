
function mudfish_adclean_96b3495f9c4f92e1dd2c24480c896f0e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.pop-layer`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_96b3495f9c4f92e1dd2c24480c896f0e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_96b3495f9c4f92e1dd2c24480c896f0e();
  });
}
