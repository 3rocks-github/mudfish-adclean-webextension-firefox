
function mudfish_adclean_29d8e9958443f78fb8c52e5bb2528daf() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#xt_sticker_wrap`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_29d8e9958443f78fb8c52e5bb2528daf();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_29d8e9958443f78fb8c52e5bb2528daf();
  });
}
