
function mudfish_adclean_121df0e2eddc24ebbcbf0b5f4c10cfaf() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#header ~ div[class^="content_st_"]:has(iframe[src$="_big_banner.php"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_121df0e2eddc24ebbcbf0b5f4c10cfaf();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_121df0e2eddc24ebbcbf0b5f4c10cfaf();
  });
}
