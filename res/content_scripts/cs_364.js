
function mudfish_adclean_1aae2c33ed6a0bd0053e693d19c2ac50() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul[class^="bbsList"] > div[style*="clear: both;"].sect0`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1aae2c33ed6a0bd0053e693d19c2ac50();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1aae2c33ed6a0bd0053e693d19c2ac50();
  });
}
