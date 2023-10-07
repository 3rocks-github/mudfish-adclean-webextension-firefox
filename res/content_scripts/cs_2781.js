
function mudfish_adclean_f59daaaa3f1dd585b1b052d6de365ff6() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`main[role="main"] header ~ .code-block`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f59daaaa3f1dd585b1b052d6de365ff6();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f59daaaa3f1dd585b1b052d6de365ff6();
  });
}
