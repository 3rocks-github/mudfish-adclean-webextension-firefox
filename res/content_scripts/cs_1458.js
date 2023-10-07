
function mudfish_adclean_d7403fe18416028ccf17dc9c561fd67b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#viewConts div[style][id^="articleBody"] + p ~ center`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d7403fe18416028ccf17dc9c561fd67b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d7403fe18416028ccf17dc9c561fd67b();
  });
}
