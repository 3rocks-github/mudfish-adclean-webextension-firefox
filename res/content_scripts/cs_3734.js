
function mudfish_adclean_be78f4fe9644e6a96071e8815ea603b4() {
  try {
    Sizzle(`iframe[src^="/template_ad/?aid="]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_be78f4fe9644e6a96071e8815ea603b4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_be78f4fe9644e6a96071e8815ea603b4, function (items) {
  if (mudfish_adclean_g_conf_be78f4fe9644e6a96071e8815ea603b4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_be78f4fe9644e6a96071e8815ea603b4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_be78f4fe9644e6a96071e8815ea603b4();
    });
  }
});
