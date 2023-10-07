
function mudfish_adclean_d8bbe638a03572cd88db5b9678a2b89b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.column_content`).forEach(element => {
        element.style.marginTop = "50px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d8bbe638a03572cd88db5b9678a2b89b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d8bbe638a03572cd88db5b9678a2b89b();
  });
}
