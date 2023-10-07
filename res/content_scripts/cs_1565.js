
function mudfish_adclean_f431f8b02a318184c6f611a8c54cf65c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.main-menu-group ~ .ct #board-cate ul[style] li[onclick^="location.href="][onclick*="/bbs_list.php?id=ppomppu7"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f431f8b02a318184c6f611a8c54cf65c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f431f8b02a318184c6f611a8c54cf65c();
  });
}
