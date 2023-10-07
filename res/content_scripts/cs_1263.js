
function mudfish_adclean_019c2be6fecd7e894a4606bdac295d26() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[itemprop="articleBody"] > div[style^="float:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_019c2be6fecd7e894a4606bdac295d26();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_019c2be6fecd7e894a4606bdac295d26();
  });
}
