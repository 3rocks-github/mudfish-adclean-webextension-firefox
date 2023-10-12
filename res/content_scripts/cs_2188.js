
function mudfish_adclean_cf3d6632e78e131ac8fd12e95c95b320() {
  try {
    Sizzle(`.adinfo`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cf3d6632e78e131ac8fd12e95c95b320 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cf3d6632e78e131ac8fd12e95c95b320, function (items) {
  if (mudfish_adclean_g_conf_cf3d6632e78e131ac8fd12e95c95b320.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cf3d6632e78e131ac8fd12e95c95b320();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
