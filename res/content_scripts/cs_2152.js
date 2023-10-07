
function mudfish_adclean_cbdc8aa79c918780f8b755bb26deea32() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src="https://filetender.com/mobon.html"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cbdc8aa79c918780f8b755bb26deea32();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cbdc8aa79c918780f8b755bb26deea32();
  });
}
