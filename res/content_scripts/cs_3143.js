
function mudfish_adclean_fb83ecd18b08234a273b2af255c5a47e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#advertising`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fb83ecd18b08234a273b2af255c5a47e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fb83ecd18b08234a273b2af255c5a47e();
  });
}
