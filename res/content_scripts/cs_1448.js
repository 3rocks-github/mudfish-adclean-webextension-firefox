
function mudfish_adclean_981052a97897913c7c35d9ba58d8f74f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[id][class] > div[style].panel-default`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_981052a97897913c7c35d9ba58d8f74f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_981052a97897913c7c35d9ba58d8f74f();
  });
}
