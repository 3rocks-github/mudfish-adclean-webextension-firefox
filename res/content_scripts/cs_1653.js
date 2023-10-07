
function mudfish_adclean_6e600aff897b226d760cbc9379a03d93() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.fm_vote ~ div[style*="max-width:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6e600aff897b226d760cbc9379a03d93();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6e600aff897b226d760cbc9379a03d93();
  });
}
