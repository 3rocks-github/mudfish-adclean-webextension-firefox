
function mudfish_adclean_07f52efd3eec646edf3f2b3095d49d9e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`header ~ header`).forEach(element => {
        element.style.marginTop = "50px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_07f52efd3eec646edf3f2b3095d49d9e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_07f52efd3eec646edf3f2b3095d49d9e();
  });
}
