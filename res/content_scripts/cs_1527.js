
function mudfish_adclean_5365a8c1c45fd547065595d16ebbeeab() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`main div[id*="_banner"][id^="welcome_"][class$="_area"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5365a8c1c45fd547065595d16ebbeeab();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5365a8c1c45fd547065595d16ebbeeab();
  });
}
