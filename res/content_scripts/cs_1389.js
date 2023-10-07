
function mudfish_adclean_02b9438ddd6863d4d287dbbe3c1e4e44() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.rankListType > li[class][data-object*="&ad="]:not([data-object*="&ad=n&"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_02b9438ddd6863d4d287dbbe3c1e4e44();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_02b9438ddd6863d4d287dbbe3c1e4e44();
  });
}
