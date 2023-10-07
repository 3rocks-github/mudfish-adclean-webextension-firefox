
function mudfish_adclean_88c1d3313dac175b6e280d267b45e801() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mbnRoll_yNow > .mbnRollUnit > .pagen_3`).forEach(element => {
        element.style.width = "363px !important";
element.style.left = "726px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_88c1d3313dac175b6e280d267b45e801();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_88c1d3313dac175b6e280d267b45e801();
  });
}
