
function mudfish_adclean_312be75e5ff6330748d70462a2e3ca81() {
  try {
    Sizzle(`#main_sec`).forEach(element => {
      element.style.marginTop = "100px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_312be75e5ff6330748d70462a2e3ca81 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_312be75e5ff6330748d70462a2e3ca81, function (items) {
  if (mudfish_adclean_g_conf_312be75e5ff6330748d70462a2e3ca81.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_312be75e5ff6330748d70462a2e3ca81();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
