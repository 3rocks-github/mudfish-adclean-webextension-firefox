
function mudfish_adclean_eddfaf9f8a9cac522616959a16b7735a() {
  try {
    Sizzle(`#_pcmap_list_scroll_container > ul > li[data-laim-exp-id="undefined*e"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_eddfaf9f8a9cac522616959a16b7735a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_eddfaf9f8a9cac522616959a16b7735a, function (items) {
  if (mudfish_adclean_g_conf_eddfaf9f8a9cac522616959a16b7735a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_eddfaf9f8a9cac522616959a16b7735a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_eddfaf9f8a9cac522616959a16b7735a();
    });
  }
});
