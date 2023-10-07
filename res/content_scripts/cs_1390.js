
function mudfish_adclean_849dc94fe979c24fc15fe8262a161c33() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[valign="top"] div[id^="left_body"] > table td[align="center"] > div[style*=" "]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_849dc94fe979c24fc15fe8262a161c33();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_849dc94fe979c24fc15fe8262a161c33();
  });
}
