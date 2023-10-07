
function mudfish_adclean_b4e13a0797d495022a396b92c4cb05d8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`tbody > tr[id^="page_show_ad_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b4e13a0797d495022a396b92c4cb05d8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b4e13a0797d495022a396b92c4cb05d8();
  });
}
