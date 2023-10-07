
function mudfish_adclean_59b63451e982733c7965b6ab49f02db2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class$="_dable"][id^="boxshow_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_59b63451e982733c7965b6ab49f02db2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_59b63451e982733c7965b6ab49f02db2();
  });
}
