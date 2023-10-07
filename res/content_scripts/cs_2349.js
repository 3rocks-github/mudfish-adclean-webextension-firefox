
function mudfish_adclean_0089580c15027ecc08cebdd9b14a607e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#contentmemo ~ .adsbygoogle > div[style^="font-size:"]`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0089580c15027ecc08cebdd9b14a607e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0089580c15027ecc08cebdd9b14a607e();
  });
}
