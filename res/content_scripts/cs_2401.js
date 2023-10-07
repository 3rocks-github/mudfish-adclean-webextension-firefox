
function mudfish_adclean_271c380daf7ea75bd42d4f858e060aee() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="_contentBody"] main > .undefined:has(> div[class*="_Banner_"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_271c380daf7ea75bd42d4f858e060aee();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_271c380daf7ea75bd42d4f858e060aee();
  });
}
