
function mudfish_adclean_99c51ef2d78ef9f84671bd45bdfb3b0f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#sidebar > div[data-version="2"]#Image5`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_99c51ef2d78ef9f84671bd45bdfb3b0f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_99c51ef2d78ef9f84671bd45bdfb3b0f();
  });
}
