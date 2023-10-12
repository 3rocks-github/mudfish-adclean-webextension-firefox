
function mudfish_adclean_2c8f032b99dadace6e782d5528c27295() {
  try {
    Sizzle(`#rcmdPrd.rcmd_prd`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2c8f032b99dadace6e782d5528c27295 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2c8f032b99dadace6e782d5528c27295, function (items) {
  if (mudfish_adclean_g_conf_2c8f032b99dadace6e782d5528c27295.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2c8f032b99dadace6e782d5528c27295();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
