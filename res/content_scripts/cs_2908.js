
function mudfish_adclean_5582d129020975690f7a48b5dc853e0e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content-container div[class^="css-"]:has(.vm-placement):not(:has(a[href] > span))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5582d129020975690f7a48b5dc853e0e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5582d129020975690f7a48b5dc853e0e();
  });
}
