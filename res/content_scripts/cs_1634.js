
function mudfish_adclean_c9a461a045625a0a718679ee8e04d031() {
  try {
    Sizzle(`.byWd div[id^="bl_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c9a461a045625a0a718679ee8e04d031 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c9a461a045625a0a718679ee8e04d031, function (items) {
  if (mudfish_adclean_g_conf_c9a461a045625a0a718679ee8e04d031.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c9a461a045625a0a718679ee8e04d031();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
