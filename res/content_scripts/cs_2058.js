
function mudfish_adclean_bb771c4bcca75dbd0fbe2b341fb825a4() {
  try {
    Sizzle(`#sdpBottomAds`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb771c4bcca75dbd0fbe2b341fb825a4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb771c4bcca75dbd0fbe2b341fb825a4, function (items) {
  if (mudfish_adclean_g_conf_bb771c4bcca75dbd0fbe2b341fb825a4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb771c4bcca75dbd0fbe2b341fb825a4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
