
function mudfish_adclean_8f5c18c43df86660a2c5c984e6be92e9() {
  try {
    Sizzle(`#news_main_all_wrp .today_issue ~ section[class="today_issue"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8f5c18c43df86660a2c5c984e6be92e9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8f5c18c43df86660a2c5c984e6be92e9, function (items) {
  if (mudfish_adclean_g_conf_8f5c18c43df86660a2c5c984e6be92e9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8f5c18c43df86660a2c5c984e6be92e9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8f5c18c43df86660a2c5c984e6be92e9();
    });
  }
});
