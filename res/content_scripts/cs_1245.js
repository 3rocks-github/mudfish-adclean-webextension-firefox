
function mudfish_adclean_cb0c871991cc526dcf69f4e3b454b257() {
  try {
    Sizzle(`div[style^="margin-top:"]#menu_right`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cb0c871991cc526dcf69f4e3b454b257 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cb0c871991cc526dcf69f4e3b454b257, function (items) {
  if (mudfish_adclean_g_conf_cb0c871991cc526dcf69f4e3b454b257.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cb0c871991cc526dcf69f4e3b454b257();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cb0c871991cc526dcf69f4e3b454b257();
    });
  }
});
