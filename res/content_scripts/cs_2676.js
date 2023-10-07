
function mudfish_adclean_08c995a2c97d4bedf80e1db11eb9fa78() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#list_aside div[id^="list_row_"].list_table_row_notice:has(a[href$="?bo_table=notice&sca=%EC%8A%A4%ED%8F%B0%EC%84%9C"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_08c995a2c97d4bedf80e1db11eb9fa78();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_08c995a2c97d4bedf80e1db11eb9fa78();
  });
}
