
function mudfish_adclean_092a90171b1efb8e39865b1cb56b5a46() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style]#cenArea > .today`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_092a90171b1efb8e39865b1cb56b5a46();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_092a90171b1efb8e39865b1cb56b5a46();
  });
}
