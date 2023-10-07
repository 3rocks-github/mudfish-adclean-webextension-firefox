
function mudfish_adclean_b5589c359a14d1bd4ccd0bcc90022591() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#yWelTopMid > .wConLT`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b5589c359a14d1bd4ccd0bcc90022591();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b5589c359a14d1bd4ccd0bcc90022591();
  });
}
