
function mudfish_adclean_32be0c5f996b4bf62980374d66ba1a78() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#Suggestion .newServices`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_32be0c5f996b4bf62980374d66ba1a78();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_32be0c5f996b4bf62980374d66ba1a78();
  });
}
