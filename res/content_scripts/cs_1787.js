
function mudfish_adclean_f92527f800848516f13207bc7bb7f91f() {
  try {
    Sizzle(`.group-deal .list > .group-power-link`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f92527f800848516f13207bc7bb7f91f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f92527f800848516f13207bc7bb7f91f, function (items) {
  if (mudfish_adclean_g_conf_f92527f800848516f13207bc7bb7f91f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f92527f800848516f13207bc7bb7f91f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
