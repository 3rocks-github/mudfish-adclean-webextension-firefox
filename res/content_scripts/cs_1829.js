
function mudfish_adclean_b10e60475d9821a101a21d0db508ab03() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#danawa-gnb-banner`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b10e60475d9821a101a21d0db508ab03();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b10e60475d9821a101a21d0db508ab03();
  });
}
