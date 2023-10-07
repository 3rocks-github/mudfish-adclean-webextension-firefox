
function mudfish_adclean_84b8ad9d2deece9e03ce68d97ca87b4a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[style][width][cellspacing][cellpadding] tr[valign] > td[style]:has(img[src^="/file/_banner/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_84b8ad9d2deece9e03ce68d97ca87b4a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_84b8ad9d2deece9e03ce68d97ca87b4a();
  });
}
