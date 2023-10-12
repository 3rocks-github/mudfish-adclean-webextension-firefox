
function mudfish_adclean_f96f9206d639759b431d6fa7805debcd() {
  try {
    Sizzle(`#lv-container ~ .clearfix`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f96f9206d639759b431d6fa7805debcd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f96f9206d639759b431d6fa7805debcd, function (items) {
  if (mudfish_adclean_g_conf_f96f9206d639759b431d6fa7805debcd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f96f9206d639759b431d6fa7805debcd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
