
function mudfish_adclean_0484a27f0b71096afdfe8f54d62dceea() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#sdp-mid-banner-btf`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0484a27f0b71096afdfe8f54d62dceea();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0484a27f0b71096afdfe8f54d62dceea();
  });
}
