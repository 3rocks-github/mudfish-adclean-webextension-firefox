
function mudfish_adclean_c51fe82196b8f2014afdacb6b9e2ee0e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="list_right_"] iframe[src*="/board/humor/list_right.html"] ~ div`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c51fe82196b8f2014afdacb6b9e2ee0e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c51fe82196b8f2014afdacb6b9e2ee0e();
  });
}
