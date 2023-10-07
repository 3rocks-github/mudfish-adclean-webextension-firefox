
function mudfish_adclean_0ffbd54bead8e053475a5e005ed51dad() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-mesh-id][data-testid] > div[id^="comp-"]:has(form[id][class])`).forEach(element => {
        element.style.marginTop = "-600px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0ffbd54bead8e053475a5e005ed51dad();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0ffbd54bead8e053475a5e005ed51dad();
  });
}
