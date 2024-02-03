
function mudfish_adclean_fb0057f7240aa75432124d99f90e49e7() {
  try {
    Sizzle(`.read_txt> div[id^="slot"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fb0057f7240aa75432124d99f90e49e7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fb0057f7240aa75432124d99f90e49e7, function (items) {
  if (mudfish_adclean_g_conf_fb0057f7240aa75432124d99f90e49e7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fb0057f7240aa75432124d99f90e49e7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fb0057f7240aa75432124d99f90e49e7();
    });
  }
});
