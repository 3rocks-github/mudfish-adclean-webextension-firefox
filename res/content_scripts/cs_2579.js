
function mudfish_adclean_2d25b253f54e63b3fdc429f478178b13() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table.table-divider > tbody > tr.notice:has(> td.title > a > strong[style]:contains([프리미엄]))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2d25b253f54e63b3fdc429f478178b13();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2d25b253f54e63b3fdc429f478178b13();
  });
}
