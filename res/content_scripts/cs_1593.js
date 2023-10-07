
function mudfish_adclean_fa53c7dc52d336a8c22327fc485dfd09() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`td[id^="divBn_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fa53c7dc52d336a8c22327fc485dfd09();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fa53c7dc52d336a8c22327fc485dfd09();
  });
}
