
function mudfish_adclean_aa6506d9902a459200410da6910826af() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#footer-wrapper div[id^="footer"].footer:has(img[src*="=s"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_aa6506d9902a459200410da6910826af();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_aa6506d9902a459200410da6910826af();
  });
}
