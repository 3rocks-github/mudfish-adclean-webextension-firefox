
function mudfish_adclean_658d0cbe18b516a4459720d67e7673d3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.payment_fullbnr`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_658d0cbe18b516a4459720d67e7673d3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_658d0cbe18b516a4459720d67e7673d3();
  });
}
