
function mudfish_adclean_13da5cbe7d82afe0028d2aa0400539f7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article > .inner ~ b`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_13da5cbe7d82afe0028d2aa0400539f7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_13da5cbe7d82afe0028d2aa0400539f7();
  });
}
