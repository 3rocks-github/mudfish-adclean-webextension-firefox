
function mudfish_adclean_decde6eb3acc3465d019664391bda62c() {
  try {
    Sizzle(`.MainBnnWrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_decde6eb3acc3465d019664391bda62c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_decde6eb3acc3465d019664391bda62c, function (items) {
  if (mudfish_adclean_g_conf_decde6eb3acc3465d019664391bda62c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_decde6eb3acc3465d019664391bda62c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
