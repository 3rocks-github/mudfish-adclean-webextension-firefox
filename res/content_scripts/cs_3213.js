
function mudfish_adclean_ee662dcc2453f439e3b885ff72987bf1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="col-md-"] div[class*="-main-"]:contains(/보증업체|검증업체/)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ee662dcc2453f439e3b885ff72987bf1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ee662dcc2453f439e3b885ff72987bf1();
  });
}
