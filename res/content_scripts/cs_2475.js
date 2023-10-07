
function mudfish_adclean_aa03a0beaacb16e771e1a13cec42f8cd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body.nate .section_cont [disp-attr]:has(> div:matches-css(display: none))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_aa03a0beaacb16e771e1a13cec42f8cd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_aa03a0beaacb16e771e1a13cec42f8cd();
  });
}
