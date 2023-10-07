
function mudfish_adclean_b8c9da44513f74d0f53669758318024b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#goodsDetailSponLnkArea`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b8c9da44513f74d0f53669758318024b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b8c9da44513f74d0f53669758318024b();
  });
}
