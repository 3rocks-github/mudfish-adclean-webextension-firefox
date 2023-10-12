
function mudfish_adclean_bddd00dfac1a3f00b021b30e62ac38ef() {
  try {
    Sizzle(`.respons-edit > div[style].float-left`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bddd00dfac1a3f00b021b30e62ac38ef = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bddd00dfac1a3f00b021b30e62ac38ef, function (items) {
  if (mudfish_adclean_g_conf_bddd00dfac1a3f00b021b30e62ac38ef.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bddd00dfac1a3f00b021b30e62ac38ef();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
