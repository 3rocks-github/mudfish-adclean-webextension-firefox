
function mudfish_adclean_066d969b497a983c49d8e906d6419654() {
  try {
    Sizzle(`ins.kakao_ad_area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_066d969b497a983c49d8e906d6419654 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_066d969b497a983c49d8e906d6419654, function (items) {
  if (mudfish_adclean_g_conf_066d969b497a983c49d8e906d6419654.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_066d969b497a983c49d8e906d6419654();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
