
function mudfish_adclean_cbf65001507d71544eeca23aa39b00c2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="power_link_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cbf65001507d71544eeca23aa39b00c2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cbf65001507d71544eeca23aa39b00c2();
  });
}
