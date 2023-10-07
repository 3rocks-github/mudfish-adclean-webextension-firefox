
function mudfish_adclean_63fb577e96095e09ee2f21c65452a0aa() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.issueBn`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_63fb577e96095e09ee2f21c65452a0aa();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_63fb577e96095e09ee2f21c65452a0aa();
  });
}
