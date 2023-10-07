
function mudfish_adclean_35da87199346d51dc3ab808a9923ba8b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.border-box tbody tr:has(td:contains(광고) ~ td a[href])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_35da87199346d51dc3ab808a9923ba8b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_35da87199346d51dc3ab808a9923ba8b();
  });
}
