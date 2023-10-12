
function mudfish_adclean_8f135cc1b80ad4eeb3d7d319837d41e7() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8f135cc1b80ad4eeb3d7d319837d41e7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8f135cc1b80ad4eeb3d7d319837d41e7, function (items) {
  if (mudfish_adclean_g_conf_8f135cc1b80ad4eeb3d7d319837d41e7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8f135cc1b80ad4eeb3d7d319837d41e7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
