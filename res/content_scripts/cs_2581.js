
function mudfish_adclean_3867e3b00ab969127d1913d5018612dd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[id^="custom_"]:has(> div.widget_text > h3:contains(SPONSORED).widgettitle)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3867e3b00ab969127d1913d5018612dd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3867e3b00ab969127d1913d5018612dd();
  });
}
