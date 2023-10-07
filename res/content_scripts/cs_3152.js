
function mudfish_adclean_8f135cc1b80ad4eeb3d7d319837d41e7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#hd_pop`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8f135cc1b80ad4eeb3d7d319837d41e7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8f135cc1b80ad4eeb3d7d319837d41e7();
  });
}
