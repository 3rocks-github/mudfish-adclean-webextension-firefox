
function mudfish_adclean_3d77bf85cdd5481e9c0c02ae6817e7de() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#contEtc > #rightContentbox:has(#SearchRightAdWrap)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3d77bf85cdd5481e9c0c02ae6817e7de();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3d77bf85cdd5481e9c0c02ae6817e7de();
  });
}
