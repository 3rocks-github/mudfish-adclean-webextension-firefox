
function mudfish_adclean_6846e2e7bdd600e83d116ba5fd26953c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul > a[href*="/0ad"].visittag`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6846e2e7bdd600e83d116ba5fd26953c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6846e2e7bdd600e83d116ba5fd26953c();
  });
}
