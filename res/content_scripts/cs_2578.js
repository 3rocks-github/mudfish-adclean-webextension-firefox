
function mudfish_adclean_6a3cf8125acc67dd7a7481cdd9438a7e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.aside_item.banner:has(> h4[style~="font-size:13px;color:#999999;margin:0"]:contains(AD))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6a3cf8125acc67dd7a7481cdd9438a7e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6a3cf8125acc67dd7a7481cdd9438a7e();
  });
}
