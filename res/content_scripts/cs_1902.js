
function mudfish_adclean_ee7f14176b486d0590030f29c1427bdd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="ADOP_"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ee7f14176b486d0590030f29c1427bdd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ee7f14176b486d0590030f29c1427bdd();
  });
}
