
function mudfish_adclean_01a952f7806779c28c610f362720a541() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul.cmt_list > li[id^="comment_li_"].ub-content.dory`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_01a952f7806779c28c610f362720a541();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_01a952f7806779c28c610f362720a541();
  });
}
