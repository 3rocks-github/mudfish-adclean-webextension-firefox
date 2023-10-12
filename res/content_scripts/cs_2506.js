
function mudfish_adclean_3d77bf85cdd5481e9c0c02ae6817e7de() {
  try {
    Sizzle(`#contEtc > #rightContentbox:has(#SearchRightAdWrap)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3d77bf85cdd5481e9c0c02ae6817e7de = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3d77bf85cdd5481e9c0c02ae6817e7de, function (items) {
  if (mudfish_adclean_g_conf_3d77bf85cdd5481e9c0c02ae6817e7de.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3d77bf85cdd5481e9c0c02ae6817e7de();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
