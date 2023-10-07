
function mudfish_adclean_1f0430608e5eab4a9ead72a7a0d0061a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content > div.bd > div.bd_lst_wrp > center`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1f0430608e5eab4a9ead72a7a0d0061a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1f0430608e5eab4a9ead72a7a0d0061a();
  });
}
