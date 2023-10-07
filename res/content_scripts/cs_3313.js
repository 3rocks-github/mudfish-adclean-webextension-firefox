
function mudfish_adclean_5de5433c78ca7913b7bd397afea3bf7e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#above_cmcl_box`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5de5433c78ca7913b7bd397afea3bf7e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5de5433c78ca7913b7bd397afea3bf7e();
  });
}
