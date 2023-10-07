
function mudfish_adclean_d9a0ac09f2bce90927d05105f850a6c0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#naverPowerShoppingArea`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d9a0ac09f2bce90927d05105f850a6c0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d9a0ac09f2bce90927d05105f850a6c0();
  });
}
