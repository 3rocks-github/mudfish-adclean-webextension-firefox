
function mudfish_adclean_d9e2d489455dd45c6dc04991181efdcd() {
  try {
    Sizzle(`.ent_wrapper.slide-vertical-effect .ent_navigation`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d9e2d489455dd45c6dc04991181efdcd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d9e2d489455dd45c6dc04991181efdcd, function (items) {
  if (mudfish_adclean_g_conf_d9e2d489455dd45c6dc04991181efdcd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d9e2d489455dd45c6dc04991181efdcd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
