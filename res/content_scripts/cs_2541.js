
function mudfish_adclean_64f0a092a80bdb7d891eb132bb3512e7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[module-design-id] ~ div > .component:has(div:has(.text--smiledelivery_slogan)) .section--component_title`).forEach(element => {
        element.style.marginTop = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_64f0a092a80bdb7d891eb132bb3512e7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_64f0a092a80bdb7d891eb132bb3512e7();
  });
}
