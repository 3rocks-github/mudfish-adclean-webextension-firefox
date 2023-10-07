
function mudfish_adclean_336a68a10221b029ba65da77bb27937b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.content_sponsor`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_336a68a10221b029ba65da77bb27937b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_336a68a10221b029ba65da77bb27937b();
  });
}
