
function mudfish_adclean_e6ef57f740868369c06018060706b5b5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="list_read_"] ul[class*="_list"] > li:has(a[href][target="_blank"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e6ef57f740868369c06018060706b5b5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e6ef57f740868369c06018060706b5b5();
  });
}
