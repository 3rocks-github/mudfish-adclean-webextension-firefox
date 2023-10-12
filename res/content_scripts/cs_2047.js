
function mudfish_adclean_36e6ff651eed396b6179bdf6971d8ab6() {
  try {
    Sizzle(`img[src^="https://acache.ilbe.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_36e6ff651eed396b6179bdf6971d8ab6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_36e6ff651eed396b6179bdf6971d8ab6, function (items) {
  if (mudfish_adclean_g_conf_36e6ff651eed396b6179bdf6971d8ab6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_36e6ff651eed396b6179bdf6971d8ab6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
