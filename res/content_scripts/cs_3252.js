
function mudfish_adclean_04d01b07180788f2350c7a59e92af0e9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ad`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_04d01b07180788f2350c7a59e92af0e9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_04d01b07180788f2350c7a59e92af0e9();
  });
}
