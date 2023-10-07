
function mudfish_adclean_50e0407ec3eff05e8da60a6e7d49af6a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.xe_content`).forEach(element => {
        element.style.opacity = "1 !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_50e0407ec3eff05e8da60a6e7d49af6a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_50e0407ec3eff05e8da60a6e7d49af6a();
  });
}
