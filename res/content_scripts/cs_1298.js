
function mudfish_adclean_3de5ddec08b96671218d5fa5694b7882() {
  try {
    Sizzle(`.main > .main_visual + .section_1`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3de5ddec08b96671218d5fa5694b7882 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3de5ddec08b96671218d5fa5694b7882, function (items) {
  if (mudfish_adclean_g_conf_3de5ddec08b96671218d5fa5694b7882.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3de5ddec08b96671218d5fa5694b7882();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
