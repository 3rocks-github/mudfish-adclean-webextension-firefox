
function mudfish_adclean_0ba96d12244316976b3eac0e2cc03fc2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.modrow-top > div[class$="_banner"][id$="Banner"]`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0ba96d12244316976b3eac0e2cc03fc2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0ba96d12244316976b3eac0e2cc03fc2();
  });
}
