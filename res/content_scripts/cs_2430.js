
function mudfish_adclean_8de1f76bfc823e9ff5680f497daf466a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[module-design-id] ~ div[module-design-id]:has(> .component--sponsor_link .link--ask_sponsor)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8de1f76bfc823e9ff5680f497daf466a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8de1f76bfc823e9ff5680f497daf466a();
  });
}
