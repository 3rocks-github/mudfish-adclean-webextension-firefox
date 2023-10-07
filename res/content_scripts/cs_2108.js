
function mudfish_adclean_8a4efa162fac99b3e567b6be393606be() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8a4efa162fac99b3e567b6be393606be();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8a4efa162fac99b3e567b6be393606be();
  });
}
