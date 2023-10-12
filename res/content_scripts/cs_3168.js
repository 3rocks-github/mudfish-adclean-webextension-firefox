
function mudfish_adclean_e9aeb2f01a9649ad64032f3eda881b8a() {
  try {
    Sizzle(`div[x-data="popups()"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e9aeb2f01a9649ad64032f3eda881b8a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e9aeb2f01a9649ad64032f3eda881b8a, function (items) {
  if (mudfish_adclean_g_conf_e9aeb2f01a9649ad64032f3eda881b8a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e9aeb2f01a9649ad64032f3eda881b8a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
