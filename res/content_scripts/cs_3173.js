
function mudfish_adclean_5eb0f09dc5b25fbb85b8082e03ff07d0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#body_text > .at-main.at-col[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5eb0f09dc5b25fbb85b8082e03ff07d0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5eb0f09dc5b25fbb85b8082e03ff07d0();
  });
}
