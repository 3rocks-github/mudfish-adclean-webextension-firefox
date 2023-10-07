
function mudfish_adclean_b4a82a0b6918835f5ef18e87170ec27a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#allKillItemList > .item_list_wrap`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b4a82a0b6918835f5ef18e87170ec27a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b4a82a0b6918835f5ef18e87170ec27a();
  });
}
