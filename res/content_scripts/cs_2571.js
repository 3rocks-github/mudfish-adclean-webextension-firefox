
function mudfish_adclean_3c4a67864b46a483b49bbac2722ae426() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#right-sidebar > .inside-right-sidebar > div[class]:not(:contains(Hi there, I'm EGG.))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3c4a67864b46a483b49bbac2722ae426();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3c4a67864b46a483b49bbac2722ae426();
  });
}
