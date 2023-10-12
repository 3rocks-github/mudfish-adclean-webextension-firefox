
function mudfish_adclean_53bee45f6f71e30ddc2eed6e0a76d576() {
  try {
    Sizzle(`#bottom_sit_handmade`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_53bee45f6f71e30ddc2eed6e0a76d576 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_53bee45f6f71e30ddc2eed6e0a76d576, function (items) {
  if (mudfish_adclean_g_conf_53bee45f6f71e30ddc2eed6e0a76d576.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_53bee45f6f71e30ddc2eed6e0a76d576();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
