
function mudfish_adclean_5d66dfa59bda8139a36622ea5b4ec3a9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content > div[style^="background:"][class]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5d66dfa59bda8139a36622ea5b4ec3a9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5d66dfa59bda8139a36622ea5b4ec3a9();
  });
}
