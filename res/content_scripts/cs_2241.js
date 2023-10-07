
function mudfish_adclean_4b039ff2709090f0d55038447c1a6e9c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-tiara-layer]:not([id])`).forEach(element => {
        element.style.marginTop = "0px !important";
element.style.position = "relative !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4b039ff2709090f0d55038447c1a6e9c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4b039ff2709090f0d55038447c1a6e9c();
  });
}
