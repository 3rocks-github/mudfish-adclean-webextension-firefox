
function mudfish_adclean_1ba64d9aa5381454679aaad799103f5a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div.section-leftmiddle-bottommiddle.cf`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1ba64d9aa5381454679aaad799103f5a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1ba64d9aa5381454679aaad799103f5a();
  });
}
