
function mudfish_adclean_2385d5b447bb6a4ecaf67be842756195() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style] table[width] td[width]:has(> ins.adsbygoogle)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2385d5b447bb6a4ecaf67be842756195();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2385d5b447bb6a4ecaf67be842756195();
  });
}
