
function mudfish_adclean_d47a93b01d9ab689d803d50c38f7946b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table td[valign][width] table > tbody > tr:not([bgcolor]) > td[height]:has(a[target="_blank"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d47a93b01d9ab689d803d50c38f7946b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d47a93b01d9ab689d803d50c38f7946b();
  });
}
