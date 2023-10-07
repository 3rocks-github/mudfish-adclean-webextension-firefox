
function mudfish_adclean_86b208bf786535ddbaeda16c4047426e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id$="_AD"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_86b208bf786535ddbaeda16c4047426e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_86b208bf786535ddbaeda16c4047426e();
  });
}
