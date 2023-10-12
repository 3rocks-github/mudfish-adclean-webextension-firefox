
function mudfish_adclean_4501c986d9d8cd7c72e03e43b18abc08() {
  try {
    Sizzle(`#popupBody #nonmember_all .button_login2`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4501c986d9d8cd7c72e03e43b18abc08 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4501c986d9d8cd7c72e03e43b18abc08, function (items) {
  if (mudfish_adclean_g_conf_4501c986d9d8cd7c72e03e43b18abc08.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4501c986d9d8cd7c72e03e43b18abc08();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
