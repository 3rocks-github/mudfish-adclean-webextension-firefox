
function mudfish_adclean_33aa23f80b9849c381e7d1e11456e29d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article table[align] td[height]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_33aa23f80b9849c381e7d1e11456e29d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_33aa23f80b9849c381e7d1e11456e29d();
  });
}
