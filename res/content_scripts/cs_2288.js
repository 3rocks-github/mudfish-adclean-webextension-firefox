
function mudfish_adclean_bb4ee26a1428c58b4bfb391d0ecb47a2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="premium-lawyer"] ~ a.goto-all-lawyers`).forEach(element => {
        element.style.marginTop = "40px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bb4ee26a1428c58b4bfb391d0ecb47a2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bb4ee26a1428c58b4bfb391d0ecb47a2();
  });
}
