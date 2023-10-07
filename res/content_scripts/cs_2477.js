
function mudfish_adclean_45fb13712f4de5fb8be85eb0bc603798() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style].xe-widget-wrapper:has(a[href^="/sisaing"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_45fb13712f4de5fb8be85eb0bc603798();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_45fb13712f4de5fb8be85eb0bc603798();
  });
}
