
function mudfish_adclean_b9c1d5a36ba677c716d2102f0ae18d67() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#aside > div[style^="background-color:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b9c1d5a36ba677c716d2102f0ae18d67();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b9c1d5a36ba677c716d2102f0ae18d67();
  });
}
