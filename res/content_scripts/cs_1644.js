
function mudfish_adclean_3eef8bfbcf4c122eba2d87969ac6cbaa() {
  try {
    Sizzle(`#artContent > div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3eef8bfbcf4c122eba2d87969ac6cbaa = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3eef8bfbcf4c122eba2d87969ac6cbaa, function (items) {
  if (mudfish_adclean_g_conf_3eef8bfbcf4c122eba2d87969ac6cbaa.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3eef8bfbcf4c122eba2d87969ac6cbaa();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
