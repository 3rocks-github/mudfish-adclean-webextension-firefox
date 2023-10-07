
function mudfish_adclean_1a13d03d843d1d13c4cb3bd447c0f4f0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-controller="font"] > .hidden`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1a13d03d843d1d13c4cb3bd447c0f4f0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1a13d03d843d1d13c4cb3bd447c0f4f0();
  });
}
