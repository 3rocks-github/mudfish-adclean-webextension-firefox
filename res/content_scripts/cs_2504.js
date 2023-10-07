
function mudfish_adclean_c08c1bdb515bcfa267cbc17589da0a9e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body.nate article#mArticle [disp-attr].g_comp:has(#bizDirtColl)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c08c1bdb515bcfa267cbc17589da0a9e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c08c1bdb515bcfa267cbc17589da0a9e();
  });
}
