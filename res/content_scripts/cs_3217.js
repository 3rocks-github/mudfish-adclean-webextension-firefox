
function mudfish_adclean_80fd7dcedafc727c670386a6fc5cde2e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.menu-ul > .menu-li:has(> a:contains(보증토토))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_80fd7dcedafc727c670386a6fc5cde2e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_80fd7dcedafc727c670386a6fc5cde2e();
  });
}
