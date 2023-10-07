
function mudfish_adclean_3da831b8e714199adaf06f2c948dd2b5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wr2_lt > div[class^="pcbview"][style*="margin-bottom:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3da831b8e714199adaf06f2c948dd2b5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3da831b8e714199adaf06f2c948dd2b5();
  });
}
