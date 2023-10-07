
function mudfish_adclean_5ce651e78c8fde9a4c8003826a15cd43() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class$="_popup"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5ce651e78c8fde9a4c8003826a15cd43();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5ce651e78c8fde9a4c8003826a15cd43();
  });
}
