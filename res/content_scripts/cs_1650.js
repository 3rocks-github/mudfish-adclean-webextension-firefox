
function mudfish_adclean_f1a9727107c673fb0067fecbfb180bca() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#articleText > section[style*="height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f1a9727107c673fb0067fecbfb180bca();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f1a9727107c673fb0067fecbfb180bca();
  });
}
