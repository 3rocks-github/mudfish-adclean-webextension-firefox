
function mudfish_adclean_0cd17f834a55b204e4112fb7ee67a912() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#main_premium_spon_block`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0cd17f834a55b204e4112fb7ee67a912();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0cd17f834a55b204e4112fb7ee67a912();
  });
}
