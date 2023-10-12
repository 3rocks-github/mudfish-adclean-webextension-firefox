
function mudfish_adclean_f3dfc530bc7112b84154577ef192e678() {
  try {
    Sizzle(`hr[style].blank`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f3dfc530bc7112b84154577ef192e678 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f3dfc530bc7112b84154577ef192e678, function (items) {
  if (mudfish_adclean_g_conf_f3dfc530bc7112b84154577ef192e678.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f3dfc530bc7112b84154577ef192e678();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
