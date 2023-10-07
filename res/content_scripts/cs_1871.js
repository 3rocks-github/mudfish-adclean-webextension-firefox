
function mudfish_adclean_fd150859655b129d819fe50cc883a9af() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src^="/banner/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fd150859655b129d819fe50cc883a9af();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fd150859655b129d819fe50cc883a9af();
  });
}
