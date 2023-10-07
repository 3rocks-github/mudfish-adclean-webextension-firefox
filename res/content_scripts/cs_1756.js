
function mudfish_adclean_ea40f9c4eb2b8375c988072a40bf92fc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`img[src^="/data/__banner/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ea40f9c4eb2b8375c988072a40bf92fc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ea40f9c4eb2b8375c988072a40bf92fc();
  });
}
