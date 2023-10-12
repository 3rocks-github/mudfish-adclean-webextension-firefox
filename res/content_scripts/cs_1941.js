
function mudfish_adclean_6b8adb3d92391c19f0d836e282e759e8() {
  try {
    Sizzle(`.wcms_banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6b8adb3d92391c19f0d836e282e759e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6b8adb3d92391c19f0d836e282e759e8, function (items) {
  if (mudfish_adclean_g_conf_6b8adb3d92391c19f0d836e282e759e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6b8adb3d92391c19f0d836e282e759e8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
