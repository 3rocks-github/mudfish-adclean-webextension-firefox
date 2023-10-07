
function mudfish_adclean_156f1b32d741a777a8eac3b6855a3483() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#bo_v_top ~ section[style*="height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_156f1b32d741a777a8eac3b6855a3483();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_156f1b32d741a777a8eac3b6855a3483();
  });
}
