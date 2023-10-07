
function mudfish_adclean_0fab92bf0627d0ae254d94a4ff92342e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.search_box_listdeal > .list_conts_wrap:has(span:contains(AD).round_badge)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0fab92bf0627d0ae254d94a4ff92342e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0fab92bf0627d0ae254d94a4ff92342e();
  });
}
