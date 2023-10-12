
function mudfish_adclean_a5b76917b780a228c30fea7d496f8c00() {
  try {
    Sizzle(`#content-header .FormItem + #opgg-video`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a5b76917b780a228c30fea7d496f8c00 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a5b76917b780a228c30fea7d496f8c00, function (items) {
  if (mudfish_adclean_g_conf_a5b76917b780a228c30fea7d496f8c00.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a5b76917b780a228c30fea7d496f8c00();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
