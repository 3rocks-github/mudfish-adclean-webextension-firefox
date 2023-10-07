
function mudfish_adclean_7fac30c0b6dd53166015562f9060fc24() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wrap.blocked .content_more_div`).forEach(element => {
        element.style.maxHeight = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7fac30c0b6dd53166015562f9060fc24();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7fac30c0b6dd53166015562f9060fc24();
  });
}
