
function mudfish_adclean_25cb38b6757da9bede326e8cffb0b496() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#fullscreen-overlay`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_25cb38b6757da9bede326e8cffb0b496();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_25cb38b6757da9bede326e8cffb0b496();
  });
}
