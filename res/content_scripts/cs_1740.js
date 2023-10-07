
function mudfish_adclean_3f34acff8f76cb27f472978595a69cb2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wt_viewer .preview_store`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3f34acff8f76cb27f472978595a69cb2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3f34acff8f76cb27f472978595a69cb2();
  });
}
