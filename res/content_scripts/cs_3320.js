
function mudfish_adclean_b59f80b91aac37efcc46b610dce91df0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.at-container .at-col div[style^="height:"]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b59f80b91aac37efcc46b610dce91df0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b59f80b91aac37efcc46b610dce91df0();
  });
}
