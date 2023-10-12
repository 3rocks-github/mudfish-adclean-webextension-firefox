
function mudfish_adclean_08c995a2c97d4bedf80e1db11eb9fa78() {
  try {
    Sizzle(`#list_aside div[id^="list_row_"].list_table_row_notice:has(a[href$="?bo_table=notice&sca=%EC%8A%A4%ED%8F%B0%EC%84%9C"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_08c995a2c97d4bedf80e1db11eb9fa78 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_08c995a2c97d4bedf80e1db11eb9fa78, function (items) {
  if (mudfish_adclean_g_conf_08c995a2c97d4bedf80e1db11eb9fa78.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_08c995a2c97d4bedf80e1db11eb9fa78();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
