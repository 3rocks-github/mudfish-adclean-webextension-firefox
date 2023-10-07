
function mudfish_adclean_2bb63c4763e332b90e99688579cae392() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`form[id][name] ~ div[id][style^="min-height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2bb63c4763e332b90e99688579cae392();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2bb63c4763e332b90e99688579cae392();
  });
}
