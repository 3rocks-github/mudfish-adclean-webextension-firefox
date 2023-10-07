
function mudfish_adclean_498d24034901ff7ab0468e4d6abe4a57() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style] > hr.spc`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_498d24034901ff7ab0468e4d6abe4a57();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_498d24034901ff7ab0468e4d6abe4a57();
  });
}
