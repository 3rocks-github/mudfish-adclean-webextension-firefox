
function mudfish_adclean_eddfaf9f8a9cac522616959a16b7735a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#_pcmap_list_scroll_container > ul > li[data-laim-exp-id="undefined*e"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_eddfaf9f8a9cac522616959a16b7735a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_eddfaf9f8a9cac522616959a16b7735a();
  });
}
