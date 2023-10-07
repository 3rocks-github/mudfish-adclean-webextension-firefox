
function mudfish_adclean_db25e2a70cb0a176a56fb32964492786() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`tr.is_notice:has(span:contains((광고)))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_db25e2a70cb0a176a56fb32964492786();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_db25e2a70cb0a176a56fb32964492786();
  });
}
