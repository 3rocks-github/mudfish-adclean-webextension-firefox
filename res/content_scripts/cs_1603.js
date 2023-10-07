
function mudfish_adclean_ca1cb1d26257d8b0dab02e1c8b771181() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.widget-side > .widget-box > div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ca1cb1d26257d8b0dab02e1c8b771181();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ca1cb1d26257d8b0dab02e1c8b771181();
  });
}
