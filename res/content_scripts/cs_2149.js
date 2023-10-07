
function mudfish_adclean_3424cebd823dd42f32e77079c4a68563() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`td[valign="top"] ~ td[width][valign][bgcolor][align] table[width][height][border][cellpadding]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3424cebd823dd42f32e77079c4a68563();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3424cebd823dd42f32e77079c4a68563();
  });
}
