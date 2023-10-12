
function mudfish_adclean_84428964998e7bba62e3411e4af3f570() {
  try {
    Sizzle(`#welcom_wrap > .font_remote`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_84428964998e7bba62e3411e4af3f570 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_84428964998e7bba62e3411e4af3f570, function (items) {
  if (mudfish_adclean_g_conf_84428964998e7bba62e3411e4af3f570.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_84428964998e7bba62e3411e4af3f570();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
