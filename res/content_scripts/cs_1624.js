
function mudfish_adclean_1314674b518f2644593105f46e34a542() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#index > div[class^="box_shadow_"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1314674b518f2644593105f46e34a542();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1314674b518f2644593105f46e34a542();
  });
}
