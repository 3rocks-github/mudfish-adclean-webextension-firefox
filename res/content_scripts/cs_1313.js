
function mudfish_adclean_8196578bb3db1efaaac0f5bc272715c2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#_popIn_recommend`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8196578bb3db1efaaac0f5bc272715c2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8196578bb3db1efaaac0f5bc272715c2();
  });
}
