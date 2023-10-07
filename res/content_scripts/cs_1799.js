
function mudfish_adclean_412b8e500e1cb85aa2e7ee73488f48b1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#gamezone .bnrList_area > ul.rollbnr_list`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_412b8e500e1cb85aa2e7ee73488f48b1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_412b8e500e1cb85aa2e7ee73488f48b1();
  });
}
