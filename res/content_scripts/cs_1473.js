
function mudfish_adclean_49741bb835b88878a1fec5b1cac1875a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class$="_bn"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_49741bb835b88878a1fec5b1cac1875a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_49741bb835b88878a1fec5b1cac1875a();
  });
}
