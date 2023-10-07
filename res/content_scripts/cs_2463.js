
function mudfish_adclean_381126e936088f7aa06d714781859451() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[id][width] tr[bgcolor] ~ tr:not([bgcolor]):has(td > ins.adsbygoogle)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_381126e936088f7aa06d714781859451();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_381126e936088f7aa06d714781859451();
  });
}
